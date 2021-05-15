import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <View style={styles.Display}>
      <Text style={[Estilo.txtG, styles.DisplayText]}>{props.num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
  },
  DisplayText: {
    color: '#FFF',
  },
});
