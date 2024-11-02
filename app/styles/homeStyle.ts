import { ScaledSheet } from "react-native-size-matters";
import Constants from "expo-constants";
import { Colors } from "@/constants/Colors";
import TextSize from "@/constants/Size";

const createHomeStyles = (colorScheme: "light" | "dark") =>
  ScaledSheet.create({
    main: {
      paddingTop: Constants.statusBarHeight + 10 || 0,
      backgroundColor: Colors[colorScheme].background,
    },
    footer: { height: "300@s" },
    head: {
      marginHorizontal: "20@s",
      overflow: "hidden",
      paddingTop: "10@s",
    },
    image: { resizeMode: "cover", width: "50@s", height: "50@s" },
    salutation: {
      color: Colors[colorScheme].icon,
      fontSize: TextSize.small,
    },
    profileView: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    welcomeContainer: { flexWrap: "nowrap", flex: 2.5 },
    welcomeText: {
      color: Colors[colorScheme].text,
      fontSize: TextSize.extraLarge,
      fontWeight: "600",
    },
    profile: {
      width: "50@s",
      height: "50@s",
      backgroundColor: "grey",
      borderRadius: 100,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    categoryContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "40@s",
      marginHorizontal: "20@s",
    },
    categoryText: { fontSize: TextSize.medium, fontWeight: "600" },
    seeAll: {
      fontSize: TextSize.small,
      fontWeight: "600",
      color: Colors[colorScheme].tint,
    },
    categoryList: {
      marginLeft: "20@s",
      height: "80@s",
      overflow: "hidden",
      alignItems: "center",
    },
    categoryItem: {
      width: "70@s",
      height: "70@s",
      marginRight: "10@s",
      backgroundColor: Colors[colorScheme].box,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      padding: "5@s",
    },
    categoryItemText: { fontSize: TextSize.extraSmall, fontWeight: "600" },
    categoryItemImage: { height: "50@s", width: "50@s", resizeMode: "contain" },
    listItemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: "40@s",
      marginHorizontal: "20@s",
      marginTop: "20@s",
    },
    listItem: {},
    listItemTitle: {},
  });

export default createHomeStyles;
