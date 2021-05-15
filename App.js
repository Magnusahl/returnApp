import React, { useEffect } from "react";
import auth from '@react-native-firebase/auth';
import MyStack from './src/navigation/MainStackContainer'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {

  useEffect(() => {
    auth()
      .signInAnonymously()
      .then(() => {
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  })

  return (
    <Provider store={store}>
      <MyStack />
    </Provider>

  )


}