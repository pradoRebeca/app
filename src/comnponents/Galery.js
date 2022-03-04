import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardGalery from './CardGalery';

const Galery = ({data}) => {
  return (
    <ScrollView style={style.view}>
      <View style={style.IconText}>
        <Icon name="star-four-points" style={style.icon} size={24.47} />
        <Text style={style.title}>Carros de 1960</Text>
      </View>
      <View style={style.viewCard}>
        <CardGalery image={data.map(item => item.image)} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  view: {
    marginTop: 62,
    marginLeft: 10,
  },
  viewCard: {
    marginTop: 12.32,
    width: 343,
    minHeight: 412,
    backgroundColor: '#F0F0F0',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardImage: {
    marginBottom: 12,
    width: 165,
    height: 200,
    borderRadius: 16,
    backgroundColor: 'red',
  },
  IconText: {
    flexDirection: 'row',
    width: 215,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    color: '#F4900C',
  },
  title: {
    color: 'black',
    width: 185,
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0.2,
    fontFamily: 'Epilogue-VariableFont_wgh',
  },
});
export default Galery;
