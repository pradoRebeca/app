import React from 'react';
import {StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

const Search = () => {
  const [searchText, setSearchText] = React.useState('');
  const onChangeSearch = text => setSearchText(text);

  return (
    <Searchbar
      style={style.search}
      placeholder={'Buscar por Carros'}
      onChangeText={onChangeSearch}
      value={searchText}
    />
  );
};

const style = StyleSheet.create({
  search: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 14.56,
    borderRadius: 8,
    shadowColor: 0,
    width: 327,
    height: 40,
    backgroundColor: '#F0F0F0',
    fontFamily: 'Epilogue-VariableFont_wgh',
    fontSize: 13,
    fontWeight: 700,
  },
});
export default Search;
