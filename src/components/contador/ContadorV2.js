import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Estilo from '../estilo';
import ContadorBotoes from './ContadorBotoes';
import ContadorDisplay from './ContadorDisplay';

export default _ => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);

  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={Estilo.txtG}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  );
};
