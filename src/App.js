import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
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
  <SafeAreaView style={style.App}>
    <UsuarioLogado usuario={{nome: 'Vitor', email: 'vitor@teste.com'}} />
    <UsuarioLogado usuario={{nome: 'Ana'}} />
    <UsuarioLogado usuario={{email: 'carlos@teste.com'}} />
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}} />
    {/*
    <Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
      <Membro />
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Julia" sobrenome="Silva" />
      <Membro />
    </Familia>
    <ParImpar num={3} />
    <Diferenciar />
    <ContadorV2 />
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
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
