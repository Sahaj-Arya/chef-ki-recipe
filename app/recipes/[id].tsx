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
import Recipes from "../../assets/data/recipes.json";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import ImageCarousel from "@/components/ImageCarousel";

const getRecipe = (id: string) => {
  const recipe = Recipes.find((item) => {
    return item.id === Number(id);
  });
  return recipe || null;
};

const RecipeScreen: React.FC = () => {
  const { id } = useGlobalSearchParams<{ id: string }>();
  const colorScheme = useColorScheme() as "light" | "dark";

  const [myRecipe, setMyRecipe] = useState<any>(null);

  const styles = useMemo(() => createRecipeStyles(colorScheme), [colorScheme]);

  useLayoutEffect(() => {
    if (id) {
      const fetchedRecipe = getRecipe(id);
      setMyRecipe(fetchedRecipe);
    }
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
      <ImageCarousel image={myRecipe.image} />
      {/* <Image source={{ uri: myRecipe.image[0] }} style={styles.image} /> */}
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
  });
