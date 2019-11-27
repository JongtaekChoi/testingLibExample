import React, { Props } from 'react';
import { View } from 'react-native';

export default class ModalBox extends React.Component {
  open = jest.fn()
  close = jest.fn()
  render() {
    return(
      <View>
        {this.props.children}
      </View>
    )
  }
};
