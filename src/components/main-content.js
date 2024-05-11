import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Image,
} from "react-native";
import { storeData, retrieveData } from "../hooks/kv-store";

export const MainContent = ({ route, navigation }) => {
  return (
    <View className="flex flex-1 flex-col items-center justify-center">
      <View className="flex flex-col items-center justify-center">
        <Image
          className="w-60 h-60 rounded-full"
          source={require("../../assets/logo.png")}
        />
        <Text className="text-2xl font-bold mt-4">Francisco's Pet Care</Text>
        <TouchableOpacity
          className="bg-blue-400 rounded-lg items-center justify-center mt-4 p-4 w-60"
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text className="text-white font-semibold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-blue-400 rounded-lg items-center justify-center mt-4 p-4 w-60"
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <Text className="text-white font-semibold">Register</Text>
        </TouchableOpacity>

        {/* mock screen */}
        <TouchableOpacity
          className="bg-blue-400 rounded-lg items-center justify-center mt-4 p-4 w-60"
          onPress={() => navigation.navigate("ServiceHome")}
        >
          <Text className="text-white font-semibold">Home</Text>
        </TouchableOpacity>

        {/* admin mock screen */}
        <TouchableOpacity onPress={() => navigation.navigate("AdminPanel")}>
          <Text className="text-white font-semibold">Admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
