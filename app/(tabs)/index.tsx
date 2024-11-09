import {
  Image,
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import createHomeStyles from "../styles/homeStyle";
import { useEffect, useMemo } from "react";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import SearchBar from "@/components/SearchBar";
import category from "../../assets/data/category.json";
import ListComponent from "@/components/ListComponent";
import topRecommendation from "../../assets/data/top_recommendation.json";
import profile from "../../assets/data/user.json";
import axios from "axios";
import { router } from "expo-router";

export default function HomeScreen() {
  const colorScheme = useColorScheme() as "light" | "dark";
  const styles = useMemo(() => createHomeStyles(colorScheme), [colorScheme]);
  const goToProfile = () => {
    router.push("/Profile");
  };
  const goToCategory = () => {
    router.push("/(tabs)/Search");
  };


  return (
    <ScrollView style={styles.main}>
      <View style={styles.head}>
        <View style={styles.profileView}>
          <View style={styles.welcomeContainer}>
            <Text onPress={goToProfile} style={styles.salutation}>
              Hello, {profile?.name}
            </Text>
            <Text style={styles.welcomeText}>
              What would you like to cook today?
            </Text>
          </View>
          <Pressable onPress={goToProfile} style={styles.profile}>
            <Image
              source={{ uri: profile?.profile_image }}
              style={styles.image}
            />
          </Pressable>
        </View>
        <SearchBar />
      </View>
      {/* category */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>Categories</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      >
        {category.map((item) => (
          <Pressable
            onPress={goToCategory}
            key={item?.id}
            style={styles.categoryItem}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RvDO1mxSg_X2Gp44Ozhv0G--eTgvBIHMNA&s",
              }}
              style={styles.categoryItemImage}
            />
            <Text style={styles.categoryItemText}>{item?.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.listItemContainer}>
        <Text style={styles.categoryText}>Recommendation</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View style={styles.listItem}>
        <ListComponent  recipes={topRecommendation} />
      </View>

      <View style={styles.listItemContainer}>
        <Text style={styles.categoryText}>Recipes Of The Week</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View style={styles.listItem}>
        <ListComponent recipes={topRecommendation} />
      </View>

      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = ScaledSheet.create({});
