import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { Pressable, Box,} from "native-base";
import { AntDesign } from '@expo/vector-icons';

export default function cartcoffee({item}) {
  return (
    <Box
      alignItems="center"
      rounded="25"
      borderWidth="1"
      borderColor="coolGray.200"
      shadow="5"
      bg="coolGray.100"
      m="5"
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBotton: 4,
          bottom: 5,
        }}
      >
        <View
          style={{
            shadowColor: "black",
            shadowRadius: 16,
            shadowOffset: { width: 0, height: 20 },
            shadowOpacity: 0.5,
          }}
        >
          <Image
            source={item.image}
            style={{
              height: 75,
              width: 75,
              left: 10,
            }}
          />
        </View>

        <View className="flex-1 space-y-1 m-5 ml-8">

          <View style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={{ color: "#d4a574" }} className="text-500 font-bold">
              {item.size}
            </Text>
            <AntDesign name="close" size={20} color="black" />
          </View>

          <Text style={{ color: "black" }} className=" text-xl font-bold">
            {item.name}
          </Text>
          <Pressable>
            <TouchableOpacity>
              <Text>Edit</Text>
            </TouchableOpacity>
          </Pressable>

          <View
            style={{
              top: 16,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "#d4a574" }}
              className="text-xl font-extrabold"
            >
              $ {item.price}
            </Text>

            <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
              <TouchableOpacity>
                <AntDesign name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{ color: "black" }} className="font-bold text-lg">
                2
              </Text>
              <TouchableOpacity>
                <AntDesign name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Box>
  );
}