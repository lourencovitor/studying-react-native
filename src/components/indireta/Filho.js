import React from 'react';
import {Button, Text} from 'react-native';

export default props => {
  function getarNumero(min, max) {
    const fator = max - min;
    return parseInt(Math.random() * fator) + min;
  }
  return (
    <>
      <Button
        title="Executar"
        onPress={function () {
          const n = getarNumero(props.min, props.max);
          props.funcao(n, 'O valor é: ');
        }}
      />
    </>
  );
};
