import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
// Novas Telas (Fase 3)
import HomeScreen from '../screens/HomeScreen';
import LaudusScreen from '../screens/LaudusScreen';
import ProtocolusScreen from '../screens/ProtocolusScreen';
import ResumusScreen from '../screens/ResumusScreen';
import ArticleDetailScreen from '../screens/ArticleDetailScreen';
import MedUltraScreen from '../screens/MedUltraScreen';
import CalculusScreen from '../screens/CalculusScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GestationalCalculator from '../screens/calculators/GestationalCalculator';
import TiRadsCalculator from '../screens/calculators/TiRadsCalculator';
import IotaCalculator from '../screens/calculators/IotaCalculator';
import FetalCalculator from '../screens/calculators/FetalCalculator';
import MedUltraOptionsScreen from '../screens/calculators/MedUltraOptionsScreen';
import PlansScreen from '../screens/PlansScreen';
import MenuScreen from '../screens/MenuScreen';
import SavesScreen from '../screens/SavesScreen';
import RecentsScreen from '../screens/RecentsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Laudus" component={LaudusScreen} />
      <Stack.Screen name="Protocolus" component={ProtocolusScreen} />
      <Stack.Screen name="Resumus" component={ResumusScreen} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
      <Stack.Screen name="MedUltra" component={MedUltraScreen} />
      <Stack.Screen name="Calculus" component={CalculusScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="GestationalCalculator" component={GestationalCalculator} />
      <Stack.Screen name="TiRadsCalculator" component={TiRadsCalculator} />
      <Stack.Screen name="IotaCalculator" component={IotaCalculator} />
      <Stack.Screen name="FetalCalculator" component={FetalCalculator} />
      <Stack.Screen name="MedUltraOptions" component={MedUltraOptionsScreen} />
      <Stack.Screen name="PlansScreen" component={PlansScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Saves" component={SavesScreen} />
      <Stack.Screen name="Recents" component={RecentsScreen} />
    </Stack.Navigator>
  );
}