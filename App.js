import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavPage from './pages/MainNavPage';
import CurrAirportHeader from './components/CurrAirportHeader';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './pages/MainTabNavigator';
import { initializeFonts } from './components/common/cx-constants';
import SplashScreen from './pages/SplashScreen.js';
import { isLoaded } from "expo-font";

export default function App() {
  const [currAirport, setCurrAirport] = useState("HKG");
  
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
