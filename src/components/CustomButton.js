import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../theme/colors';

export default function CustomButton({ title, onPress, loading, type = 'primary', style }) {
  const isPrimary = type === 'primary';
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        isPrimary ? styles.primary : styles.secondary,
        style
      ]} 
      onPress={onPress} 
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? '#FFF' : colors.primaryColor} />
      ) : (
        <Text style={[styles.text, isPrimary ? styles.textPrimary : styles.textSecondary]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primary: {
    backgroundColor: colors.primaryColor,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primaryColor,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textPrimary: {
    color: '#FFFFFF',
  },
  textSecondary: {
    color: colors.primaryColor,
  },
});
