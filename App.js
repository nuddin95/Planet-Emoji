import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Components/Home';
import Game from './Components/Game'

export default RootNavigator = StackNavigator({
  Main: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home'
      }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      headerTitle: 'Planet Emoji'
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
