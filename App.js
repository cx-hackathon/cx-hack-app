import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import MainNavPage from './pages/MainNavPage';
import CurrAirportHeader from './components/CurrAirportHeader';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './pages/MainTabNavigator';
import { initializeFonts } from './components/common/cx-constants';
import SplashScreen from './pages/SplashScreen.js';
import { isLoaded } from "expo-font";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

const client = new ApolloClient({
  link: createHttpLink({uri: 'https://ms0pguzuy0.execute-api.ap-southeast-1.amazonaws.com/Prod/graphql'}),
  cache: new InMemoryCache(),
})
//const client = new ApolloClient({
  //link: 'http://localhost:4000/graphql',
  //cache: new InMemoryCache(),
//})
  loadDevMessages();

  loadErrorMessages();

export default function App() {
  const [currAirport, setCurrAirport] = useState("HKG");
  
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </ApolloProvider>
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
