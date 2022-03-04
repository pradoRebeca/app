import React from 'react';
import {View, Image} from 'react-native';

const Elias = ({image}) => {
  return (
    <View>
      <Image source={{uri: image}} />
    </View>
  );
};

export default Elias;
