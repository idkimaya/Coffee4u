import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { Pressable, Box,} from "native-base";
import Cartcoffee from '../components/cartcoffee';
import { categories, coffeeItems } from '../constants';

const CartScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ backgroundColor: "#e6e6e6" }}
      className="flex-1 flex justify-between"
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 16,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            paddingTop: 10,
            fontWeight: "bold",
            right: 150,
          }}
        >
          Cart
        </Text>
      </View>

      <View>
        <ScrollView>
          <View>
            {coffeeItems.map((item, index) => (
              <Cartcoffee item={item} key={index} />
            ))}
          </View>

          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgLight }}
            className="p-3 rounded-xl"
          >
            <Text className="text-center text-white text-base font-bold">
              Checkout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
    </SafeAreaView>
  );
}

export default CartScreen