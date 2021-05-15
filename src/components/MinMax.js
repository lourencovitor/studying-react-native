import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default ({max, min}) => (
  <Text style={Estilo.txtG}>
    O Valor {max} é maior que o valor {min}!
  </Text>
);
