import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SlidingTabs({ tabs, activeTab, onChangeTab }) {
  return (
    <View style={styles.tabsWrapper}>
      {tabs.map((tab) => {
        const isSelected = activeTab === tab;
        const displayLabel = tab === 'Tecnica' ? 'Técnica' : tab;
        
        return (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, isSelected && styles.tabButtonSelected]}
            onPress={() => onChangeTab(tab)}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, isSelected && styles.tabTextSelected]}>
              {displayLabel}
            </Text>
            {isSelected && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1.5,
    borderBottomColor: '#F1F1F1',
    height: 48,
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  tabButtonSelected: {},
  tabText: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  tabTextSelected: {
    color: '#35B48B',
    fontWeight: '700',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: '20%',
    right: '20%',
    height: 3,
    backgroundColor: '#35B48B',
    borderRadius: 1.5,
  },
});
