import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList'

const App = () => {
  return (

    // provider works as a glu for connecting react and redux. Provider can only have one child component. but that child can have many components inside it
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1}}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;