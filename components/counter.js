import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
    this.addCount = this.addCount.bind(this)
  }

  addCount(){
    console.log("hit!")
    this.setState(previousState => {
      return { count: previousState.count + 1}
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Count: {this.state.count}</Text>
        <Button onPress={this.addCount} title="Add To Count"/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Counter
