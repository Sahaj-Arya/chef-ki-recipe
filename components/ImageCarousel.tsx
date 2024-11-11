import { Image, Platform, FlatList, useColorScheme, View } from "react-native";
import React, { useMemo } from "react";
import { ScaledSheet } from "react-native-size-matters";
import { ScreenWidth, WindowHeight, WindowWidth } from "@/constants/Size";

interface ImageCarouselProps {
  image: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ image }) => {
  const colorScheme = useColorScheme() as "light" | "dark";
  const styles = useMemo(() => createRecipeStyles(colorScheme), [colorScheme]);

  return (
    <View style={styles.container}>
      <FlatList
        data={image}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        keyExtractor={(item, index) => `${item}-${index}`}
        // horizontal={Platform.OS !== "web"}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 0 }}
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
};

export default ImageCarousel;

const createRecipeStyles = (colorScheme: "light" | "dark") =>
  ScaledSheet.create({
    container: {
      backgroundColor: colorScheme === "dark" ? "#333" : "#FFF",
      width: ScreenWidth,
    },
    image: {
      width: ScreenWidth,
      height: WindowHeight / 2,
    },
  });
