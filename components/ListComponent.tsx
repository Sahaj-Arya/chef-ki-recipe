import {
  FlatList,
  Image,
  Pressable,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React, { useMemo } from "react";
import TextSize from "@/constants/Size";
import { ScaledSheet } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";
import { RecipeList } from "@/app/types/listComponentTypes";
import { router } from "expo-router";

interface RecipeListProps {
  recipes: RecipeList; // Define recipes as a RecipeList type
}

const ListComponent: React.FC<RecipeListProps> = ({ recipes }) => {
  const colorScheme = useColorScheme() as "light" | "dark";
  const styles = useMemo(() => createHomeStyles(colorScheme), [colorScheme]);

  const goToRecipe = (id: string) => {
    router.push(`/screens/recipes/${id}`);
  };

  return (
    <FlatList
      data={recipes}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ gap: 10 }}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={() => <View style={styles.footer} />}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            goToRecipe(item?.id.toString());
            console.log("recipe");
          }}
          style={(styles.listItem, index === 0 ? styles.leftPadding : {})}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: item?.image[0],
              }}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}>{item?.name}</Text>
          <Text style={styles.desc}>By {item?.created_by}</Text>
        </Pressable>
      )}
    />
  );
};

export default ListComponent;

const createHomeStyles = (colorScheme: "light" | "dark") =>
  ScaledSheet.create({
    listItem: {
      width: 180,
      flex: 1,
    },
    leftPadding: { paddingLeft: "20@s" },
    imageContainer: {
      borderRadius: 20,
      overflow: "hidden",
      marginBottom: 10,
    },
    image: {
      height: 250,
      width: 180,
      resizeMode: "cover",
    },
    text: { fontSize: TextSize.medium, fontWeight: "600" },
    desc: { fontSize: TextSize.small, color: Colors[colorScheme].icon },
    footer: {
      width: 180,
    },
  });
