import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SkeletonLoader = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.text} />
          <View style={styles.shortText} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    width: "80%",
    height: 20,
    borderRadius: 4,
  },
  shortText: {
    width: "40%",
    height: 20,
    borderRadius: 4,
    marginTop: 8,
  },
});

export default SkeletonLoader;
