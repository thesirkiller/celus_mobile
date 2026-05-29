import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function FloatingNavbar({ navigation, activeTab }) {
  return (
    <View style={styles.floatingNavbar}>
      {/* Home Tab */}
      <TouchableOpacity 
        style={styles.navTab} 
        onPress={() => activeTab !== 'home' && navigation.navigate('Home')}
        activeOpacity={0.7}
      >
        <View style={[styles.navIconContainer, activeTab === 'home' && styles.navIconContainerActive]}>
          <Image 
            source={activeTab === 'home' ? require('../../assets/home.png') : require('../../assets/home-inactive.png')} 
            style={[styles.navIcon, activeTab === 'home' && styles.navIconActive]} 
          />
        </View>
      </TouchableOpacity>

      {/* Recents Tab */}
      <TouchableOpacity 
        style={styles.navTab} 
        onPress={() => activeTab !== 'recents' && navigation.navigate('Recents')}
        activeOpacity={0.7}
      >
        <View style={[styles.navIconContainer, activeTab === 'recents' && styles.navIconContainerActive]}>
          <Image 
            source={activeTab === 'recents' ? require('../../assets/clock-active.png') : require('../../assets/clock-inactive.png')} 
            style={[styles.navIcon, activeTab === 'recents' && styles.navIconActive]} 
          />
        </View>
      </TouchableOpacity>

      {/* Saves (Bookmark) Tab */}
      <TouchableOpacity 
        style={styles.navTab} 
        onPress={() => activeTab !== 'saves' && navigation.navigate('Saves')}
        activeOpacity={0.7}
      >
        <View style={[styles.navIconContainer, activeTab === 'saves' && styles.navIconContainerActive]}>
          <Image 
            source={activeTab === 'saves' ? require('../../assets/bookmark-active.png') : require('../../assets/bookmark-inactive.png')} 
            style={[styles.navIcon, activeTab === 'saves' && styles.navIconActive]} 
          />
        </View>
      </TouchableOpacity>

      {/* Plans Tab */}
      <TouchableOpacity 
        style={styles.navTab} 
        onPress={() => activeTab !== 'plans' && navigation.navigate('PlansScreen')}
        activeOpacity={0.7}
      >
        <View style={[styles.navIconContainer, activeTab === 'plans' && styles.navIconContainerActive]}>
          <Image 
            source={activeTab === 'plans' ? require('../../assets/heart-active.png') : require('../../assets/heart-inactive.png')} 
            style={[styles.navIcon, activeTab === 'plans' && styles.navIconActive]} 
          />
        </View>
      </TouchableOpacity>

      {/* Menu Tab */}
      <TouchableOpacity 
        style={styles.navTab} 
        onPress={() => activeTab !== 'menu' && navigation.navigate('Menu')}
        activeOpacity={0.7}
      >
        <View style={[styles.navIconContainer, activeTab === 'menu' && styles.navIconContainerActive]}>
          <Image 
            source={activeTab === 'menu' ? require('../../assets/menu-active.png') : require('../../assets/menu-inactive.png')} 
            style={[styles.navIcon, activeTab === 'menu' && styles.navIconActive]} 
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingNavbar: {
    position: 'absolute',
    bottom: 20,
    left: '5%',
    right: '5%',
    width: '90%',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  navTab: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  navIconContainerActive: {
    backgroundColor: '#EBFDF5', // Soft capsule brand green highlight
  },
  navIcon: {
    width: 20, // Legible 20x20 icon dimension
    height: 20,
    tintColor: '#9CA3AF',
  },
  navIconActive: {
    tintColor: '#35B48B',
  },
});
