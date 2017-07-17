import React, { Component } from 'react';
import Login from './components/login'
import Counter from './components/counter'
import userReducers from './reducers/user'
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Provider from 'redux'
import { createStore, combineReducers } from 'redux';

let store = createStore(combineReducers({userReducers}))

export default class dog extends Component {
  render(){
    return (
      <Counter />
    )
  }
}


AppRegistry.registerComponent('dog', () => dog);
