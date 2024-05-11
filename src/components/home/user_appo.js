import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Header from "../header";
import Footer from "../ft";
import { storeData, retrieveData, deleteData } from "../../hooks/kv-store";

export default function UserAppo() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [prevdataState, setprevdataState] = useState([]);
  const arr = [
    {
      appo: "checkup",
      pettype: "cat",
      scheduler: "user",
      time: "2024-05-03T14:52:00.000Z",
    },
    {
      appo: "grooming",
      pettype: "fish",
      scheduler: "user",
      time: "2024-07-12T14:55:00.000Z",
    },
    {
      appo: "grooming",
      pettype: "fish",
      scheduler: "user",
      time: "2024-07-12T14:55:00.000Z",
    },
    {
      appo: "grooming",
      pettype: "fish",
      scheduler: "user",
      time: "2024-07-12T14:55:00.000Z",
    },
    {
      appo: "grooming",
      pettype: "fish",
      scheduler: "usasder",
      time: "2024-07-12T14:55:00.000Z",
    },
    {
      appo: "grooming",
      pettype: "fish",
      scheduler: "usasder",
      time: "2024-08-12T14:55:00.000Z",
    },
  ];

  //user
  const filterarr = arr.filter((item) => item.scheduler === "usasder");

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

  const timetostring = (time) => {
    const date = new Date(time);
    const dateStringWithTime = date.toUTCString();
    const dateParts = dateStringWithTime.split(" ");
    const dateString = dateParts.slice(0, 4).join(" ");

    return dateString;
  };

  return (
    <View className="h-screen flex flex-col" style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <Header />

        <View style={{ flex: 1 }} className="flex flex-col border m-3 mb-12">
          <ScrollView
            className="w-full h-full"
            showsVerticalScrollIndicator={false}
          >
            {arr.map((item, index) => (
              <View
                key={index}
                className="flex flex-row w-full border m-6 p-2 gap-2 self-center"
              >
                <Image
                  source={require("../../../assets/logo.png")}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                  className="rounded-full self-center"
                />
                <View className="flex flex-col w-full gap-2">
                  <Text>Appointment: {item.appo}</Text>
                  <Text>Pet Type: {item.pettype}</Text>
                  <Text>Scheduler: {item.scheduler}</Text>
                  <Text>Time: {timetostring(item.time)}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer />
    </View>
  );
}
