import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

/**
 * 登录页
 */
class Login extends Component {
  render() {
    return (
      <View>
        <Image source={require('../../../res/profileBackground.jpg')} />
      </View>
    );
  }
}

export default Login;
