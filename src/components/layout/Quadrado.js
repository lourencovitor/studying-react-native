import React from 'react';
import {View} from 'react-native';

export default ({cor = '#000'}) => {
  const lado = 50;
  return <View style={{width: lado, height: lado, backgroundColor: cor}} />;
};
