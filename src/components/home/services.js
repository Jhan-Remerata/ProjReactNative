import { View, Text, TouchableOpacity, Image } from "react-native";
import Header from "../header";
import Carousel from "../carousel";
import Footer from "../ft";

export default function ServiceHome({ navigation }) {
  return (
    <View className="h-screen flex flex-col" style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <Header />
        
        <Text className="text-2xl font-semibold underline m-2">Services</Text>
        <View className="flex flex-col items-center justify-center h-[30%] m-2">
          <View className='w-full h-full gap-y-4'>
            <TouchableOpacity
              onPress={() => navigation.navigate("ServiceForm")}
              className="flex w-full h-full items-center justify-center bg-slate-300"
            >
              <Image
                source={require("../../../assets/bg.png")}
                className="w-full h-full rounded-md"
              />
              <Text className="absolute text-xl font-bold text-white top-0 left-0 m-2">
                Booking for an Appointment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("UserAppo")}
              className="flex w-full h-full items-center justify-center bg-slate-300"
            >
              <Image
                source={require("../../../assets/fdg.png")}
                className="w-full h-full rounded-md"
              />
              <Text className="absolute text-xl font-bold text-white top-0 left-0 m-2">
                Check Pending Appointment
              </Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
      {/* <FooterItem /> */}

      <Footer />
    </View>
  );
}
