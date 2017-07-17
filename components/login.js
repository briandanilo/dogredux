import React from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'

function mapStateToProps(state) { return {user: state.userReducers.user} }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions,dispatch)}

class Login extends React.Component {

  constructor (props) {
    super(props);
    this.onLoginButtonPress = this.onLoginButtonPress.bind(this)
  }

  onLoginButtonPress(){
    this.props.login({
      username: "bd",
      pass: "123"
    })
  }

  render () {
    return (
      <View>
      {
        !this.props.user.loggedIn &&
          <TouchableHighlight onPress={this.onLoginButtonPress}>
            <Text>Log In</Text>
          </TouchableHighlight>
      }
      </View>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
