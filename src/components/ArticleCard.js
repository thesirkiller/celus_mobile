import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../theme/colors';

export default function ArticleCard({ item, onPress }) {
  // Assume que item tem: title, specialty, created_at, images[]
  const imageUrl = item.images && item.images.length > 0 ? item.images[0] : null;

  let imageSource = null;
  if (imageUrl) {
    if (typeof imageUrl === 'number' || (typeof imageUrl === 'object' && imageUrl.uri === undefined)) {
      imageSource = imageUrl;
    } else {
      imageSource = { uri: imageUrl };
    }
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {imageSource ? (
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>Sem Imagem</Text>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.specialty}>{item.specialty || 'Geral'}</Text>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.date}>
          {new Date(item.created_at).toLocaleDateString('pt-BR')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.alternate,
  },
  image: {
    width: 100,
    height: 100,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    backgroundColor: colors.alternate,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: colors.secondaryText,
    fontSize: 10,
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  specialty: {
    fontSize: 12,
    color: colors.primaryColor,
    fontWeight: '600',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primaryText,
  },
  date: {
    fontSize: 12,
    color: colors.secondaryText,
    marginTop: 8,
  },
});
