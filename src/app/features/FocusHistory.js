import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { paddingSizes } from "../utils/sizes";

export const FoucsHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.title}>We haven't focused on anything yet!</Text>
    );

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on : </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: paddingSizes.md,
  },
  item: {
    color: colors.white,
    fontSize: paddingSizes.md,
    textAlign: "center",
    paddingTop: paddingSizes.md,
  },
  title: {
    color: colors.white,
    fontSize: paddingSizes.lg,
    textAlign: "center",
  },
});
