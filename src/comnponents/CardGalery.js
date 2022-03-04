import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const CardGalery = ({image}) => {
  console.log(image);

  return (
    <View>
      <Image
        style={style.cardImage}
        source={{
          uri: image,
        }}
      />
    </View>
  );

  // return <Image source={image} style={style.cardImage} />;
};

const style = StyleSheet.create({
  cardImage: {
    marginBottom: 12,
    width: 165,
    height: 200,
    borderRadius: 16,
    backgroundColor: 'red',
  },
});

export default CardGalery;
