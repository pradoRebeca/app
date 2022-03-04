import React from 'react';
import {StyleSheet, View, Image, FlatList} from 'react-native';
import Elias from './Elias';

const CardGalery = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Elias {...item} />}
        horizontal
      />
    </View>
  );
};

export default CardGalery;
