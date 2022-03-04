import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import CardDestaques from './CardDestaques';
import Icon from 'react-native-vector-icons/Fontisto';
import IconArrow from 'react-native-vector-icons/AntDesign';

const Destaques = ({data}) => {
  return (
    <View>
      <View style={style.viewTitle}>
        <View style={style.IconText}>
          <Icon name="fire" style={style.icon} size={19.88} />
          <Text style={style.title}>Destaques</Text>
        </View>
        <View style={style.viewIconArrow}>
          <IconArrow name="arrowleft" size={24} />
          <IconArrow name="arrowright" size={24} />
        </View>
      </View>
      <FlatList
        data={data}
        horizontal
        renderItem={({item}) => (
          <CardDestaques
            image={item.image}
            name={item.name}
            time={item.time}
            price={item.price}
          />
        )}
      />
    </View>
  );
};

export default Destaques;

const style = StyleSheet.create({
  viewTitle: {
    height: 32,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17.23,
    marginTop: 41.14,
    marginRight: 16,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0.2,
    fontFamily: 'Epilogue-VariableFont_wgh',
  },
  icon: {
    color: '#F4900C',
    size: 19.88,
    width: 18.2,
  },
  viewIconArrow: {
    width: 81,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  IconText: {
    flexDirection: 'row',
    width: 149,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
