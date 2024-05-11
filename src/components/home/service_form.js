import React, { useEffect, useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import Footer from "../ft";
import Header from "../header";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import { storeData, retrieveData, deleteData } from "../../hooks/kv-store";

export default function ServiceForm() {
  const [servicesItem, setservicesItem] = useState();
  const [petTypes, setpetTypes] = useState();
  const [schedules, setSchedules] = useState();
  const [sdate, setDate] = useState(false);
  const [prevdataState, setprevdataState] = useState([]);
  const [user, setUser] = useState("user");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await retrieveData("appointments");
        if (data) {
          setprevdataState(data);
          console.log("Data retrieved: ", data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmission = async () => {
    try {
      const newData = {
        appo: servicesItem,
        pettype: petTypes,
        time: schedules,
        scheduler: user,
      };
      const updatedData = [...prevdataState, newData];
      await storeData("appointments", updatedData);
    } catch (error) {
      console.error("Error storing data: ", error);
    }
  };

  return (
    <View className="h-screen flex-col" style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <Header />
      </View>
      <View></View>
      <View className="flex flex-col justify-start border border-black h-[65%] m-5 mt-0 mb-36">
        <Text className="text-black text-[50px] font-bold self-center">
          Book
        </Text>

        <View className="flex flex-col mt-12 m-3">
          <Text className="text-black text-xl font-bold">Services</Text>
          <View className="border rounded-md bg-slate-200">
            <Picker
              selectedValue={servicesItem}
              onValueChange={(itemValue, itemIndex) =>
                setservicesItem(itemValue)
              }
            >
              <Picker.Item label="Select an Appointment Type" value={null} />
              <Picker.Item label="Vetinary Checkup" value="checkup" />
              <Picker.Item label="Pet Grooming" value="grooming" />
              <Picker.Item label="Pet Daycare" value="daycare" />
            </Picker>
          </View>
        </View>
        <View className="flex flex-col m-3">
          <Text className="text-black text-xl font-bold">Pet</Text>
          <View className="border rounded-md bg-slate-200">
            <Picker
              selectedValue={petTypes}
              onValueChange={(itemValue, itemIndex) => setpetTypes(itemValue)}
            >
              <Picker.Item label="Select a Pet Type" value={null} />
              <Picker.Item label="Cat" value="cat" />
              <Picker.Item label="Dog" value="dog" />
              <Picker.Item label="Bird" value="bird" />
              <Picker.Item label="Fish" value="fish" />
              <Picker.Item label="Others" value="others" />
            </Picker>
          </View>
        </View>
        <View className="flex flex-col m-3">
          <Text className="text-black text-xl font-bold">Schedule</Text>
          <View className="border rounded-md bg-slate-200">
            <TouchableOpacity
              onPress={() => setDate(true)}
              className="flex flex-row w-full h-12 justify-between items-center rounded-md bg-slate-200 px-4"
            >
              <Text className="text-black text-md justify-center">
                {schedules ? schedules.toDateString() : "Select Date"}
              </Text>
              <AntDesign name="caretdown" size={9} color="grey" />
            </TouchableOpacity>
            {sdate && (
              <DateTimePicker
                value={schedules ? schedules : new Date()}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setSchedules(selectedDate);
                  setDate(false);
                }}
              />
            )}
          </View>
        </View>
        <TouchableOpacity
          className="self-center bg-blue-400 w-[80%] h-[50px] items-center justify-center rounded-md m-12"
          onPress={handleSubmission}
        >
          <Text className="text-black text-xl font-bold">Submit</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}
