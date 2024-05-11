import { View, Text, TouchableOpacity } from "react-native";
import Header from "../header";
import Carousel from "../carousel";
import Footer from "../ft";

export default function AdminPanel() {
  return (
    <View className="h-screen flex flex-col" style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <Header />
      </View>
      {/* <FooterItem /> */}

      <Footer />
    </View>
  );
}
