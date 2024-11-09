import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";
import colorScheme from "../types/colorScheme";

const RecipeScreen: React.FC = () => {
  const { id } = useGlobalSearchParams();

  console.log("ID : ", id);
  const styles = useMemo(() => createRecipeStyles(colorScheme), [colorScheme]);


  return (
    <View>
      <Text>RecipeScreen : {id}</Text>
    </View>
  );
};

export default RecipeScreen;

const createRecipeStyles = (colorScheme) => ScaledSheet.create({});
