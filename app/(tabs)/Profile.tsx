import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>
        Profile <Ionicons name="checkmark-circle" size={32} color="green" />
      </Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
