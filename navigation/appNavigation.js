import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { Dimensions, LogBox, Platform, Text, View } from 'react-native';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import FavScreen from '../screens/FavScreen';
import AccountScreen from '../screens/AccountScreen';
import { themeColors } from '../theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import {HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid} from 'react-native-heroicons/solid';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: {backgroundColor: 'white'}
      }}>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeTabs} />
        <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} />
        <Stack.Screen name="Cart" options={{headerShown: false}}  component={CartScreen} />
        <Stack.Screen name="Favorite" options={{headerShown: false}}  component={FavScreen} />
        <Stack.Screen name="Account" options={{headerShown: false}}  component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

function HomeTabs(){
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
            marginBottom: 26,
            height: 75,
            alignItems: 'center',
            position:"absolute",
            borderRadius: 100,
            marginHorizontal: 10,
            backgroundColor: "white",
          },
        tabBarItemStyle: {
          marginTop: ios? 30: 0,
          
        }
      })}
      
      >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favourite" component={FavScreen} />
      <Tab.Screen name="cart" component={CartScreen} />
    </Tab.Navigator>
  )
}

const menuIcons = (route, focused)=> {
  let icon;
  

  if (route.name === 'home') {
    icon =  focused? <HomeSolid size="30" color={themeColors.bgDark} /> : <HomeOutline size="30" strokeWidth={2} color={themeColors.bgLight} />
  } else if (route.name === 'favourite') {
    icon =  focused? <HeartSolid size="30" color={themeColors.bgDark} /> : <HeartOutline size="30" strokeWidth={2} color={themeColors.bgLight} />
  }else if(route.name==='cart'){
    icon =  focused? <BagSolid size="30" color={themeColors.bgDark} /> : <BagOutline size="30" strokeWidth={2} color={themeColors.bgLight} />
  }

  
  return (
    <View>
      {icon}
    </View>
  )
}