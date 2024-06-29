import React from 'react';
import { StatusBar,} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './navigation/StackNavigator';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#F3F2ED'} />
      <>
        <StackNavigator/>
      </>
      
    </>
  );
}