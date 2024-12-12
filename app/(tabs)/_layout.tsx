import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export default function _layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
