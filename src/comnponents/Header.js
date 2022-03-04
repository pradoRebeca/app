import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Header = () => {
  return (
    <View style={style.view}>
      <Image style={style.image} source={require('../img/logo.png')} />
      <Text style={style.text}>
        SEU
        <Text style={{fontWeight: '300'}}> CARRO</Text>
        <Text style={{fontWeight: '700'}}> FORA</Text>
        <Text style={{fontWeight: '400'}}> DA</Text>
        <Text style={{fontWeight: '500'}}> CARRETINHA</Text>
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    backgroundColor: '#2E68DA',
    width: '100%',
    height: 105,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '200',
    letterSpacing: 0.2,
    fontFamily: 'Epilogue-VariableFont_wght',
  },
  image: {
    width: 171,
    height: 69,
  },
});

export default Header;
