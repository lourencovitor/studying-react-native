import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default ({max, min}) => {
  let numAleatory = Math.floor(Math.random() * max) + min;
  return <Text style={Estilo.txtG}>Numero aleatorio {numAleatory}!</Text>;
};
