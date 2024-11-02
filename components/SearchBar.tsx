import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";

const SearchBar: React.FC = () => {
  const colorScheme: ColorSchemeType = useColorScheme() as ColorSchemeType;

  return (
    <View style={{ width: "100%", marginTop: 20 }}>
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          marginTop: 10,
          paddingLeft: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EvilIcons name="search" size={38} color={Colors[colorScheme].icon} />
      </View>
      <View
        style={{
          position: "absolute",
          right: 40,
          zIndex: 99,
          marginTop: 5,
          width: 1,
          height: 40,
          backgroundColor: Colors[colorScheme].icon,
        }}
      />
      <View
        style={{
          position: "absolute",
          right: 10,
          zIndex: 99,
          marginTop: 12,
        }}
      >
        <AntDesign name="filter" size={24} color={Colors[colorScheme].icon} />
      </View>
      <TextInput
        style={{
          height: 50,
          borderRadius: 100,
          paddingLeft: 50,
          paddingRight: 60,
          backgroundColor: Colors[colorScheme].box,
        }}
        placeholder="Search any recipe"
        placeholderTextColor={"grey"}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
