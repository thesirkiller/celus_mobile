import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CustomHeader({ title, navigation, onPressBack, rightElement }) {
  const handleBack = () => {
    if (onPressBack) {
      onPressBack();
    } else if (navigation) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      {(navigation || onPressBack) ? (
        <TouchableOpacity style={styles.backBtnWrapper} onPress={handleBack} activeOpacity={0.7}>
          <Image 
            source={require('../../assets/arrow-left.png')} 
            style={styles.backIcon} 
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 40 }} />
      )}
      
      <Text style={styles.headerTitle} numberOfLines={1}>{title}</Text>
      
      {rightElement ? (
        <View style={styles.rightContainer}>{rightElement}</View>
      ) : (
        <View style={{ width: 40 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
    marginTop: 8,
    backgroundColor: '#FFFFFF',
  },
  backBtnWrapper: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    color: '#1F2937',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 8,
  },
  rightContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
