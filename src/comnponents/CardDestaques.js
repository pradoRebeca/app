import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const CardDestaques = ({image, name, time, price}) => {
  return (
    <View style={style.view}>
      <Image style={style.image} source={{uri: image}} />
      <Text style={style.name}>{name}</Text>
      <Text style={style.price}>
        R${price}
        <Text style={style.time}>/{time}</Text>
      </Text>
    </View>
  );
};

export default CardDestaques;

const style = StyleSheet.create({
  view: {
    fontFamily: 'Epilogue-VariableFont_wgh',
    width: 254,
    height: 360.46,
    marginLeft: 16,
  },
  image: {
    width: 254,
    height: 300,
    borderRadius: 20,
    marginBottom: 12,
  },
  name: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    height: 24,
    marginBottom: 4.77,
  },
  price: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
  time: {
    fontSize: 10,
    fontWeight: '400',
  },
});
