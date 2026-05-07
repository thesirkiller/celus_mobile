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
    </Stack.Navigator>
  );
}