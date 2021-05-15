import React from 'react';
import {Text, FlatList} from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos';

export default props => {
  const produtoRender = ({item}) => {
    return (
      <Text key={item.id}>
        {item.id}) {item.nome} - R$ {item.preco}
      </Text>
    );
  };
  return (
    <>
      <Text style={Estilo.txtG}>Lista de produtos V2</Text>
      <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={produtoRender}
      />
    </>
  );
};
