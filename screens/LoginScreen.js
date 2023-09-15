import { View, Image } from 'react-native'
import React from 'react'
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";

export default function LoginScreen() {
  return (
    <View>
      <Image 
       blurRadius={6}
        source={require('../assets/coffeelogin.png')} 
        style={{height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
        className="w-full absolute"/>

      <View style={{top:210}}>
        <Center w="100%">
      <Box safeArea p="2" py="8" w="100%" maxW="400" rounded="25"
      borderWidth="1"
      borderColor="coolGray.200"
      shadow="5"
      bg="white"
      m="5">
        <Heading size="xl" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input variant="rounded" size="xl"/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" variant="rounded" size="xl"/>
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "#8c5319"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="amber" borderRadius="full" size="lg">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "#8c5319",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
     </Center>
    </View>
    </View>
   
  );
}