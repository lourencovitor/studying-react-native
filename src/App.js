import React from 'react';
import {View, StyleSheet} from 'react-native';
import Primeiro from './components/Primeiro';
import CompPadrao, {Comp1, Comp2} from './components/Multi';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';

export default () => (
  <View style={style.App}>
    <Botao />
    {/*
    <Titulo
    principal="Cadastro Produto"
    segundario="Tela de cadastro do Produto"
    />
    <Aleatorio min={3} max={20} />
     <MinMax min="3" max="20" />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
