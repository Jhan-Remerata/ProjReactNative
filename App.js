import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainContent } from "./src/components/main-content";
import LoginScreen from "./src/components/auth/login_screen";
import SignUpScreen from "./src/components/auth/singup_screen";
import ServiceHome from "./src/components/home/services";
import ServiceForm from "./src/components/home/service_form";
import AdminPanel from "./src/components/admin/admin_panel";
import UserAppo from "./src/components/home/user_appo";

export default function App() {
  const NavStack = createStackNavigator();

  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName="MainContent">
        <NavStack.Screen
          name="MainContent"
          component={MainContent}
          options={{ headerShown: false }}
        />
        {/* sign up and login boundary */}
        <NavStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <NavStack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        {/* sign up and login boundary */}
        <NavStack.Screen
          name="ServiceHome"
          component={ServiceHome}
          options={{ headerShown: false }}
        />
        <NavStack.Screen
          name="ServiceForm"
          component={ServiceForm}
          options={{ headerShown: false }}
        />
        <NavStack.Screen
          name="AdminPanel"
          component={AdminPanel}
          options={{ headerShown: false }}
        />
        <NavStack.Screen
          name="UserAppo"
          component={UserAppo}
          options={{ headerShown: false }}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
}
