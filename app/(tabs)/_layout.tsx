import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#0f0d23",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => <Ionicons name="home" size={24} color={"#fff"} />,
        }}
      />
      <Tabs.Screen
        name="Saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: () => <Ionicons name="save" size={24} color={"#fff"} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="user" size={24} color={"#fff"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
