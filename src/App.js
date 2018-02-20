import React, { Component } from 'react';
// import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBLmnEcsdcbxHD85v4hHqsyu73VRZGEY2Y',
      authDomain: 'manager-b6f3a.firebaseapp.com',
      databaseURL: 'https://manager-b6f3a.firebaseio.com',
      projectId: 'manager-b6f3a',
      storageBucket: 'manager-b6f3a.appspot.com',
      messagingSenderId: '546869944118'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

// console.ignoredYellowBox = ['Setting a timer'];

export default App;
