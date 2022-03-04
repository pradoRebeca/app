import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {List} from 'react-native-paper';

const Item = () => {
  return (
    <ScrollView>
      <List.Item
        title="Firts Item"
        left={() => <List.Icon icon="folder" />}
        right={() => <List.Icon icon="arrow-right" />}
      />
    </ScrollView>
  );
};

export default Item;
