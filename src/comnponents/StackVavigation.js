import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tela1 from './Tela1';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen componentes={Tela1} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
