import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Footer = () => {
  return (
    <View style={styles.container}>
      <View className="absolute bottom-0 left-0 w-[105%] h-25 flex-col justify-end p-5 bg-blue-400 gap-2">
        <View className="flex flex-row items-center">
          <FontAwesome name="phone" size={24} color="black" />
          <Text className="text-black font-semibold">
            &nbsp;Contact Us 091212241
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <MaterialIcons name="email" size={24} color="black" />
          <Text className="text-black font-semibold">
            &nbsp;Email sample@email.com
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: "space-between",
  },
  footer: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});

export default Footer;
