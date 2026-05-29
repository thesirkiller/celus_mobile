import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../theme/colors';
import { supabase } from '../services/supabase';
import { addToQueue } from '../services/syncQueue';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

// Lista estática de comentários de médicos para simular as avaliações da comunidade de forma premium
const SIMULATED_COMMENTS = [
  { id: '1', name: 'Dr. Thiago Medeiros', initial: 'TM', role: 'Radiologista', rating: 5, comment: 'Excelente síntese! Os critérios estão perfeitamente de acordo com as diretrizes internacionais. Muito útil para o plantão diário.' },
  { id: '2', name: 'Dra. Amanda Cavalcanti', initial: 'AC', role: 'Ginecologista & Obstetra', rating: 5, comment: 'Muito prático e direto. O visual e a organização ajudam a sanar dúvidas rápidas na beira do leito. Parabéns pela curadoria.' },
  { id: '3', name: 'Dr. Lucas Vasconcelos', initial: 'LV', role: 'Médico Emergencista', rating: 4, comment: 'Excelente protocolo para consulta rápida. Utilizo sempre no pronto-socorro para guiar as condutas da equipe.' }
];

export default function ArticleDetailScreen({ route, navigation }) {
  const { item, type } = route.params;

  const [isFavorite, setIsFavorite] = useState(false);
  const [readingTime, setReadingTime] = useState('2 min');

  useEffect(() => {
    checkIfFavorite();
    saveToReadingHistory();
    calculateReadingTime();
  }, []);

  // Calcula tempo de leitura aproximado com base no conteúdo
  const calculateReadingTime = () => {
    try {
      const text = typeof item.content === 'string' ? item.content : JSON.stringify(item.content);
      const words = text.split(/\s+/).length;
      const minutes = Math.max(1, Math.ceil(words / 150)); // Média de 150 palavras por minuto
      setReadingTime(`${minutes} min`);
    } catch (e) {
      setReadingTime('2 min');
    }
  };

  /**
   * Checa se o artigo está favoritado (offline-first)
   */
  const checkIfFavorite = async () => {
    try {
      // 1. Checa no AsyncStorage local
      const currentSavedStr = await AsyncStorage.getItem('@offline_saved_articles');
      const currentSaved = currentSavedStr ? JSON.parse(currentSavedStr) : [];
      const isFavLocal = currentSaved.some(saved => saved.id === item.id);
      setIsFavorite(isFavLocal);

      // 2. Sincroniza com Supabase se estiver online
      const state = await NetInfo.fetch();
      if (state.isConnected) {
        const { data: userData } = await supabase.auth.getUser();
        if (userData?.user) {
          const { data: savedRef } = await supabase
            .from('saved_articles')
            .select('article_id')
            .eq('user_id', userData.user.id)
            .eq('article_id', item.id)
            .maybeSingle();
            
          if (savedRef) {
            setIsFavorite(true);
            if (!isFavLocal) {
              currentSaved.push({ ...item, type });
              await AsyncStorage.setItem('@offline_saved_articles', JSON.stringify(currentSaved));
            }
          } else if (isFavLocal) {
            // Remove localmente se foi removido online em outro dispositivo
            const updated = currentSaved.filter(saved => saved.id !== item.id);
            await AsyncStorage.setItem('@offline_saved_articles', JSON.stringify(updated));
            setIsFavorite(false);
          }
        }
      }
    } catch (e) {
      console.log('Erro ao checar status de favorito:', e);
    }
  };

  /**
   * Salva o artigo completo no histórico de leitura local (Recents) para visualização offline
   */
  const saveToReadingHistory = async () => {
    try {
      // 1. Salva localmente com o objeto completo para visualização offline integral
      const currentHistoryStr = await AsyncStorage.getItem('@offline_reading_history');
      let currentHistory = currentHistoryStr ? JSON.parse(currentHistoryStr) : [];
      
      // Remove se já existir para reinserir no topo da lista (ordenado por mais recente)
      currentHistory = currentHistory.filter(h => h.id !== item.id);
      currentHistory.unshift({ ...item, type, read_at: new Date().toISOString() });
      
      // Limita a lista aos 20 itens mais recentes
      if (currentHistory.length > 20) {
        currentHistory = currentHistory.slice(0, 20);
      }
      
      await AsyncStorage.setItem('@offline_reading_history', JSON.stringify(currentHistory));
      console.log('[Offline] Artigo adicionado ao histórico local para leitura offline.');

      // 2. Salva no Supabase se houver internet para manter sincronismo multi-dispositivo
      const state = await NetInfo.fetch();
      if (state.isConnected) {
        const { data: userData } = await supabase.auth.getUser();
        if (userData?.user) {
          await supabase.from('reading_history').upsert({
            user_id: userData.user.id,
            article_id: item.id,
            article_type: type,
            read_at: new Date().toISOString()
          }, { onConflict: 'user_id,article_id' });
        }
      }
    } catch (e) {
      console.log('Erro ao salvar no histórico de leitura:', e);
    }
  };

  /**
   * Alterna o status de favorito (online/offline resiliente)
   */
  const toggleFavorite = async () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) return;
    
    const payload = {
      user_id: userData.user.id,
      article_id: item.id,
      article_type: type,
      is_favorite: true
    };

    // 1. Salva ou remove o artigo localmente no cache offline
    try {
      const currentSavedStr = await AsyncStorage.getItem('@offline_saved_articles');
      let currentSaved = currentSavedStr ? JSON.parse(currentSavedStr) : [];
      
      if (newFavoriteState) {
        if (!currentSaved.some(saved => saved.id === item.id)) {
          currentSaved.push({ ...item, type });
        }
      } else {
        currentSaved = currentSaved.filter(saved => saved.id !== item.id);
      }
      
      await AsyncStorage.setItem('@offline_saved_articles', JSON.stringify(currentSaved));
    } catch (e) {
      console.log('Erro ao atualizar favoritos locais offline:', e);
    }

    // 2. Sincroniza com Supabase
    const state = await NetInfo.fetch();
    if (state.isConnected) {
      if (newFavoriteState) {
        await supabase.from('saved_articles').insert(payload);
      } else {
        await supabase.from('saved_articles')
          .delete()
          .eq('user_id', userData.user.id)
          .eq('article_id', item.id);
      }
    } else {
      // Se estiver offline, adiciona na fila de sincronia
      await addToQueue({
        type: newFavoriteState ? 'FAVORITE_ADD' : 'FAVORITE_REMOVE',
        payload
      });
    }
  };

  // Parser inteligente para interpretar conteúdo do Quill Delta JSON
  const renderContentText = (contentField) => {
    if (!contentField) return '';
    if (typeof contentField === 'string') {
      // Se parecer um JSON do Quill Delta
      if (contentField.trim().startsWith('[') && contentField.trim().endsWith(']')) {
        try {
          const delta = JSON.parse(contentField);
          return delta.map(op => op.insert || '').join('');
        } catch (e) {
          return contentField;
        }
      }
      return contentField;
    }
    // Se já for um objeto/array parseado
    if (Array.isArray(contentField)) {
      return contentField.map(op => op.insert || '').join('');
    }
    return JSON.stringify(contentField);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stackContainer}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          
          {/* Imagem de Capa Premium com proporção clássica */}
          {item.images && item.images.length > 0 ? (
            <Image source={{ uri: item.images[0] }} style={styles.coverImage} resizeMode="cover" />
          ) : (
            <View style={styles.coverPlaceholder}>
              <Text style={styles.placeholderLogo}>Celus</Text>
            </View>
          )}

          {/* Área de Conteúdo */}
          <View style={styles.content}>
            
            {/* Metadados Superiores 1:1 Legado */}
            <View style={styles.metadataRow}>
              <View style={styles.specialtyWrapper}>
                <Text style={styles.specialtyText}>
                  {(item.specialty || item.category || 'Medicina').toUpperCase()}
                </Text>
              </View>
              <View style={styles.ratingRow}>
                <Image source={require('../../assets/star-profile.png')} style={styles.starIcon} />
                <Text style={styles.ratingText}>4.9 (12 avaliações)</Text>
              </View>
            </View>

            {/* Título Principal */}
            <Text style={styles.title}>{item.title}</Text>

            {/* Tempo de Leitura e Data */}
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>⏱ Aproximadamente: {readingTime} de leitura</Text>
              <Text style={styles.dateText}>
                Publicado em {new Date(item.created_at).toLocaleDateString('pt-BR')}
              </Text>
            </View>

            <View style={styles.divider} />

            {/* Corpo Clínico / Descrição Principal */}
            <Text style={styles.bodyText}>
              {renderContentText(item.content)}
            </Text>

            {/* Seção de Conclusão Clássica Destacada */}
            {item.conclusion && (
              <View style={styles.conclusionBox}>
                <Text style={styles.conclusionTitle}>Conclusão</Text>
                <Text style={styles.conclusionText}>
                  {renderContentText(item.conclusion)}
                </Text>
              </View>
            )}

            {/* Referências Bibliográficas */}
            {item.bibliographic_references && (
              <View style={styles.referencesBox}>
                <Text style={styles.referencesTitle}>Referências Bibliográficas</Text>
                <Text style={styles.referencesText}>
                  {renderContentText(item.bibliographic_references)}
                </Text>
              </View>
            )}

            <View style={styles.sectionDivider} />

            {/* Seção de Avaliações / Comentários da Comunidade de Médicos */}
            <View style={styles.commentsSection}>
              <Text style={styles.commentsSectionTitle}>Avaliações do conteúdo</Text>
              <Text style={styles.commentsSectionSub}>
                Opinião dos membros da comunidade Celus sobre este artigo.
              </Text>

              {SIMULATED_COMMENTS.map(c => (
                <View key={c.id} style={styles.commentCard}>
                  <View style={styles.commentHeader}>
                    <View style={styles.avatarCircle}>
                      <Text style={styles.avatarText}>{c.initial}</Text>
                    </View>
                    <View style={styles.commentUserMeta}>
                      <Text style={styles.commentUserName}>{c.name}</Text>
                      <Text style={styles.commentUserRole}>{c.role}</Text>
                    </View>
                    <View style={styles.commentStars}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Text key={i} style={[styles.starChar, i < c.rating && styles.starCharActive]}>
                          ★
                        </Text>
                      ))}
                    </View>
                  </View>
                  <Text style={styles.commentBody}>{c.comment}</Text>
                </View>
              ))}
            </View>

          </View>
        </ScrollView>

        {/* Header Superior Flutuante (Stack) Translúcido e Fino */}
        <View style={styles.floatingHeader}>
          <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
            <Image 
              source={require('../../assets/arrow-left.png')} 
              style={styles.backIcon} 
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} onPress={toggleFavorite}>
            <Text style={[styles.heartIcon, isFavorite && styles.heartIconActive]}>
              {isFavorite ? '♥' : '♡'}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  stackContainer: {
    flex: 1,
    position: 'relative',
  },
  scroll: {
    paddingBottom: 60,
  },
  coverImage: {
    width: '100%',
    height: 240,
    backgroundColor: '#F3F4F6',
  },
  coverPlaceholder: {
    width: '100%',
    height: 180,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderLogo: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '800',
    color: '#35B48B',
    letterSpacing: 1,
  },
  content: {
    padding: 20,
  },
  metadataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  specialtyWrapper: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  specialtyText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 10,
    color: '#35B48B',
    letterSpacing: 0.5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
    tintColor: '#FFD700', // Dourado
  },
  ratingText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 11,
    color: '#6B7280',
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 22,
    color: '#1F2937',
    lineHeight: 28,
    marginBottom: 10,
  },
  timeRow: {
    flexDirection: 'column',
    gap: 4,
    marginBottom: 16,
  },
  timeText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 12,
    color: '#6B7280',
  },
  dateText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 11,
    color: '#9CA3AF',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 12,
  },
  bodyText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 24,
    color: '#374151',
  },
  conclusionBox: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },
  conclusionTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
    color: '#166534',
    marginBottom: 8,
  },
  conclusionText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: '#14532D',
  },
  referencesBox: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  referencesTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 13,
    color: '#374151',
    marginBottom: 8,
  },
  referencesText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20,
    color: '#6B7280',
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 32,
  },
  commentsSection: {
    marginTop: 8,
  },
  commentsSectionTitle: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 4,
  },
  commentsSectionSub: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 20,
  },
  commentCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 11,
    color: '#35B48B',
  },
  commentUserMeta: {
    flex: 1,
  },
  commentUserName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 13,
    color: '#1F2937',
  },
  commentUserRole: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 11,
    color: '#6B7280',
  },
  commentStars: {
    flexDirection: 'row',
  },
  starChar: {
    fontSize: 12,
    color: '#D1D5DB',
  },
  starCharActive: {
    color: '#FFD700',
  },
  commentBody: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: '#4B5563',
  },
  // Header Superior Flutuante (Stack) Translúcido Fino
  floatingHeader: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(241, 241, 241, 0.5)',
  },
  backIcon: {
    width: 18,
    height: 18,
  },
  heartIcon: {
    fontSize: 20,
    color: '#9CA3AF',
  },
  heartIconActive: {
    color: '#35B48B',
  },
});
