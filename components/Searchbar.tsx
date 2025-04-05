import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const Searchbar = () => {
  return (
    <View className="flex-row items-center gap-2 mt-16 bg-secondary px-4 py-2">
      <Ionicons name="search-sharp" size={24} color="#a8b5db" />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#a8b5db"
        className="text-[#a8b5db]"
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
