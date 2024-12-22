import React from "react";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1EB854", // Warna hijau untuk tab aktif
        tabBarInactiveTintColor: "gray", // Warna abu-abu untuk tab tidak aktif
        tabBarStyle: {
          backgroundColor: "#fff", // Warna latar belakang tab
          elevation: 5, // Memberikan efek bayangan
        },
      }}
    >
      {/* Tab Dashboard */}
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home-circle" : "home-outline"} // Berubah tergantung status
              size={28} // Ukuran lebih besar
              color={color}
            />
          ),
        }}
      />

      {/* Tab Profil */}
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "account-circle" : "account-outline"} // Berubah tergantung status
              size={28} // Ukuran lebih besar
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
