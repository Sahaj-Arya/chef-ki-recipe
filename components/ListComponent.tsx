import { FlatList, Pressable, Text, useColorScheme, View } from "react-native";
import React, { useMemo } from "react";
import TextSize from "@/constants/Size";
import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";
import { RecipeList } from "@/app/types/listComponentTypes";
import { router } from "expo-router";
import { Image } from "expo-image";

interface RecipeListProps {
  recipes: RecipeList;
}

const ListComponent: React.FC<RecipeListProps> = ({ recipes }) => {
  const colorScheme = useColorScheme() as "light" | "dark";
  const styles = useMemo(() => createHomeStyles(colorScheme), [colorScheme]);

  const goToRecipe = (id: string) => {
    router.push(`/recipes/${id}`);
  };

  return (
    <FlatList
      data={recipes}
      horizontal
      keyExtractor={(item) => item?.idMeal}
      contentContainerStyle={{ gap: 10 }}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={() => <View style={styles.footer} />}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            goToRecipe(item?.idMeal);
          }}
          style={(styles.listItem, index === 0 ? styles.leftPadding : {})}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: item?.strMealThumb,
              }}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}>{item?.strMeal}</Text>
          {/* <Text style={styles.desc}>By {item?.created_by}</Text> */}
        </Pressable>
      )}
    />
  );
};

export default ListComponent;

const createHomeStyles = (colorScheme: "light" | "dark") =>
  ScaledSheet.create({
    listItem: {
      width: "180@s",
      flex: 1,
    },
    leftPadding: { paddingLeft: "20@s" },
    imageContainer: {
      borderRadius: 20,
      overflow: "hidden",
      marginBottom: 10,
    },
    image: {
      height: "250@s",
      width: "180@s",
      contentFit: "cover",
    },
    text: {
      fontSize: TextSize.medium,
      fontWeight: "600",
      flexWrap: "wrap",
      width: "180@s",
    },
    desc: { fontSize: TextSize.small, color: Colors[colorScheme].icon },
    footer: {
      width: "180@s",
    },
  });
