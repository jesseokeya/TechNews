// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/NewsList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'NewsFeed'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('TechNews', () => App);

export default App;
