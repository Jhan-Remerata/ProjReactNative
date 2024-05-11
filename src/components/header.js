import { View, Image, Text } from "react-native";

export default function Header() {
  return (
    <View className="flex flex-row items-center justify-center p-5 bg-blue-400 gap-3 mt-2">
      <Image
        source={require("../../assets/logo.png")}
        className="w-12 h-12 rounded-full"
      />
      <Text className="text-3xl font-bold text-center text-white shadow-sm">
        Francisco's Pet Care
      </Text>
    </View>
  );
}
