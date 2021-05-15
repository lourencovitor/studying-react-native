import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={styles.Botoes}>
      <Button title="-" onPress={props.dec} />
      <Button title="+" onPress={props.inc} />
    </View>
  );
};

const styles = StyleSheet.create({
  Botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    marginTop: 20,
  },
});
