import { Tabs } from "expo-router";
import React from "react";
import Icon from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="(search)"
      screenOptions={{
        tabBarActiveTintColor: "#2F54EB",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="(search)"
        options={{
          title: "Arama",

          tabBarIcon: ({ focused }) => (
            <Icon
              size={26}
              name="search"
              color={focused ? "#2F54EB" : "#8C8C8C"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profilim",

          tabBarIcon: ({ focused }) => (
            <Icon
              size={26}
              name="person"
              color={focused ? "#2F54EB" : "#8C8C8C"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
