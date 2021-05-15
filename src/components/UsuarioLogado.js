import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';
import IF from './If';

export default props => {
  const usuario = props.usuario || {};
  return (
    <>
      <IF teste={usuario && usuario.nome && usuario.email}>
        <Text style={Estilo.txtG}>Usuário Logado</Text>
        <Text style={Estilo.txtG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </IF>
    </>
  );
};
