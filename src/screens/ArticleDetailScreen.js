import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';
import { supabase } from '../services/supabase';

export default function ArticleDetailScreen({ route, navigation }) {
  const { item, type } = route.params;

  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = async () => {
    // Para UX rápida: inverte no UI primeiro
    setIsFavorite(!isFavorite);
    
    const { data: userData } = await supabase.auth.getUser();
    if (!userData?.user) return;
    
    if (!isFavorite) {
      await supabase.from('saved_articles').insert({
        user_id: userData.user.id,
        article_id: item.id,
        article_type: type,
        is_favorite: true
      });
    } else {
      await supabase.from('saved_articles').delete()
        .eq('user_id', userData.user.id)
        .eq('article_id', item.id);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{item.specialty || 'Detalhes'}</Text>
        <TouchableOpacity onPress={toggleFavorite}>
          <Text style={{ fontSize: 24, color: isFavorite ? colors.error : colors.secondaryText }}>
            {isFavorite ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {item.images && item.images.length > 0 && (
          <Image source={{ uri: item.images[0] }} style={styles.coverImage} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>
            Publicado em {new Date(item.created_at).toLocaleDateString('pt-BR')}
          </Text>
          
          <View style={styles.divider} />
          
          {/* Para simplificar neste MVP, renderizamos como texto puro se for string. Em prod, JSONB precisará de um parser específico (como react-native-render-html se for rico) */}
          <Text style={styles.bodyText}>
            {typeof item.content === 'string' ? item.content : JSON.stringify(item.content)}
          </Text>

          {item.conclusion && (
            <View style={styles.conclusionBox}>
              <Text style={styles.conclusionTitle}>Conclusão</Text>
              <Text style={styles.conclusionText}>{item.conclusion}</Text>
            </View>
          )}

          {item.bibliographic_references && (
            <View style={styles.referencesBox}>
              <Text style={styles.referencesTitle}>Referências Bibliográficas</Text>
              <Text style={styles.referencesText}>{item.bibliographic_references}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { padding: 16, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.alternate },
  back: { color: colors.primaryColor, fontWeight: 'bold', marginRight: 16, width: 60 },
  headerTitle: { flex: 1, fontSize: 16, fontWeight: '600', color: colors.primaryText },
  scroll: { paddingBottom: 48 },
  coverImage: { width: '100%', height: 200, backgroundColor: colors.alternate },
  content: { padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.primaryText, marginBottom: 8 },
  date: { fontSize: 14, color: colors.secondaryText, marginBottom: 16 },
  divider: { height: 1, backgroundColor: colors.alternate, marginVertical: 16 },
  bodyText: { fontSize: 16, lineHeight: 24, color: '#333' },
  conclusionBox: { backgroundColor: '#F0FDF4', padding: 16, borderRadius: 8, marginTop: 24, borderWidth: 1, borderColor: '#BBF7D0' },
  conclusionTitle: { fontSize: 18, fontWeight: 'bold', color: '#166534', marginBottom: 8 },
  conclusionText: { fontSize: 16, lineHeight: 24, color: '#14532D' },
  referencesBox: { marginTop: 32, paddingTop: 16, borderTopWidth: 1, borderColor: colors.alternate },
  referencesTitle: { fontSize: 14, fontWeight: 'bold', color: colors.secondaryText, marginBottom: 8 },
  referencesText: { fontSize: 14, color: colors.secondaryText, lineHeight: 20 },
});
