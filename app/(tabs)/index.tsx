import { Image, View, ScrollView, Pressable } from "react-native";
import SearchBar from "@/components/SearchBar";
import categories from "../../assets/data/category.json";
import ListComponent from "@/components/ListComponent";
import profile from "../../assets/data/user.json";
import SkeletonLoader from "@/components/SkeletonLoader";
import useHomeHook from "@/components/home/useHomeHook";
import CustomText from "@/components/CustomText";

export default function HomeScreen() {
  const { styles, goToProfile, goToCategory, data, isFetching } = useHomeHook();

  return (
    <ScrollView style={styles.main}>
      <View style={styles.head}>
        <View style={styles.profileView}>
          <View style={styles.welcomeContainer}>
            <CustomText onPress={goToProfile} style={styles.salutation}>
              Hello, {profile?.name}
            </CustomText>
            <CustomText style={styles.welcomeText}>
              What would you like to cook today?
            </CustomText>
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
        <CustomText style={styles.categoryText}>Categories</CustomText>
        <CustomText style={styles.seeAll}>See all</CustomText>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      >
        {categories?.length &&
          categories?.map((item) => (
            <Pressable
              onPress={() => goToCategory(item)}
              key={item?.id}
              style={styles.categoryItem}
            >
              <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RvDO1mxSg_X2Gp44Ozhv0G--eTgvBIHMNA&s",
                }}
                style={styles.categoryItemImage}
              />
              <CustomText style={styles.categoryItemText}>
                {item?.name}
              </CustomText>
            </Pressable>
          ))}
      </ScrollView>
      <View style={styles.listItemContainer}>
        <CustomText style={styles.categoryText}>Recommendation</CustomText>
        <CustomText style={styles.seeAll}>See all</CustomText>
      </View>
      {isFetching ? (
        <SkeletonLoader />
      ) : (
        <View style={styles.listItem}>
          <ListComponent recipes={data?.meals?.length ? data?.meals : []} />
        </View>
      )}

      <View style={styles.listItemContainer}>
        <CustomText style={styles.categoryText}>Recipes Of The Week</CustomText>
        <CustomText style={styles.seeAll}>See all</CustomText>
      </View>
      <View style={styles.listItem}>
        {/* <ListComponent recipes={topRecommendation} /> */}
      </View>

      <View style={styles.footer} />
    </ScrollView>
  );
}
