import {
  Image,
  Platform,
  Pressable,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React, { useLayoutEffect, useMemo, useState } from "react";
import { router, useGlobalSearchParams } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";
import { AntDesign, Fontisto } from "@expo/vector-icons";

import axios from "axios";

const getRecipe = async (id: string) => {
  const result = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return result.data;
};

const RecipeScreen: React.FC = () => {
  const { id } = useGlobalSearchParams<{ id: string }>();
  const colorScheme = useColorScheme() as "light" | "dark";
  const [myRecipe, setMyRecipe] = useState<any>(null);
  const styles = useMemo(() => createRecipeStyles(colorScheme), [colorScheme]);

  useLayoutEffect(() => {
    (async () => {
      const recipe = await getRecipe(id);
      setMyRecipe(recipe?.meals[0]);
    })();
  }, [id]);

  if (!myRecipe) {
    return (
      <View style={styles.container}>
        <Text>No Recipe Found</Text>
      </View>
    );
  }

  const goBack = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.iconContainer}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.iconContainer}>
          <Fontisto name="bookmark" size={24} color="black" />
        </Pressable>
      </View>
      {/* <ImageCarousel image={myRecipe.image} /> */}
      <Image source={{ uri: myRecipe.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{myRecipe.name}</Text>
      <Text>RecipeScreen ID: {id}</Text>
      <Text>Description: {myRecipe.description}</Text>
    </View>
  );
};

export default RecipeScreen;

// Example styles
const createRecipeStyles = (colorScheme: "light" | "dark") =>
  ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === "dark" ? "#333" : "#FFF",
    },
    title: {
      fontSize: "18@s",
      fontWeight: "bold",
      color: colorScheme === "dark" ? "#FFF" : "#000",
    },

    header: {
      position: "absolute",
      width: "100%",
      top: Platform.OS === "ios" ? 50 : 20,
      zIndex: 99,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
    },
    iconContainer: {
      backgroundColor: "white",
      borderRadius: 200,
      justifyContent: "center",
      alignItems: "center",
      aspectRatio: 1,
      width: 40,
    },
    image: {
      width: "100%",
      height: 600,
    },
  });
