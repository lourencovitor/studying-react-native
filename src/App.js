import React from 'react';
import {View, StyleSheet} from 'react-native';
import ContadorV2 from './components/contador/ContadorV2';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';

export default () => (
  <View style={style.App}>
    <ContadorV2 />
    {/*
    <Pai />
    <Pai />
    <Contador inicial={100} passo={3} />
    <Contador />
    <Botao />
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
