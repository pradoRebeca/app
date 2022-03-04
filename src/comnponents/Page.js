import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import SearchContainer from './Search';
import Item from './Item';

const Page = () => {
  return (
    <ScrollView>
      <Text> Settings </Text>
      <SearchContainer />
      <Item></Item>
    </ScrollView>
  );
};

export default Page;
