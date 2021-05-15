import React from 'react';
import {StyleSheet, View} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={styles.FlexV3}>
      <Quadrado cor="#ff801a" />
      <Quadrado cor="#50d1f6" />
      <Quadrado cor="#dd22c1" />
      <Quadrado cor="#8312ed" />
      <Quadrado cor="#36c9a7" />
    </View>
  );
};

const styles = StyleSheet.create({
  FlexV3: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    backgroundColor: '#000',
  },
});
