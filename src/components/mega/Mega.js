import React, {Component} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';
import Estilo from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumeros = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
      .sort((a, b) => a - b);
    this.setState({numeros});
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
      .sort((a, b) => a - b);
    this.setState({numeros});
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => <MegaNumero key={num} num={num} />);
  };

  render() {
    return (
      <>
        <Text style={Estilo.txtG}>
          Gerador de Mega-Sena {this.state.qtdeNumeros}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          placeholder="Qtde de Números"
          style={styles.Button}
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumeros}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View style={styles.numbers}>{this.exibirNumeros()}</View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    borderBottomWidth: 1,
    marginTop: 30,
  },
  numbers: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
