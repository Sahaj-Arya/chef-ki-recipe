import React, { useMemo } from "react";
import { Platform, TextInput, useColorScheme, View } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import { ScaledSheet } from "react-native-size-matters";

const SearchBar: React.FC = () => {
  const colorScheme = useColorScheme() as "light" | "dark";
  const styles = useMemo(() => createInputStyles(colorScheme), [colorScheme]);

  return (
    <View style={styles.root}>
      <EvilIcons
        name="search"
        size={28}
        color={Colors[colorScheme].icon}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search any recipe"
        placeholderTextColor={Colors[colorScheme].placeholder}
      />
      <View style={styles.divider} />
      <AntDesign
        name="filter"
        size={24}
        color={Colors[colorScheme].icon}
        style={styles.filterIcon}
      />
    </View>
  );
};

export default SearchBar;

const createInputStyles = (colorScheme: "light" | "dark") =>
  ScaledSheet.create({
    root: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      backgroundColor: Colors[colorScheme].box,
      borderRadius: 25,
      paddingHorizontal: 10,
    },
    searchIcon: {
      marginLeft: 5,
      marginTop: Platform.OS === "ios" ? 0 : -4,
    },
    input: {
      flex: 1,
      height: "100%",
      paddingLeft: 10,
      paddingRight: 10,
      color: Colors[colorScheme].text,
    },
    divider: {
      width: 1,
      height: 25,
      backgroundColor: Colors[colorScheme].icon,
      marginHorizontal: 10,
    },
    filterIcon: {
      marginRight: 5,
    },
  });
