import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";
import { fontSizes, paddingSizes } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [focusItem, setFocusItem] = useState(null);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Focus</Text> */}
      <Text style={styles.title}>What would you like to focus on?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          onChangeText={setFocusItem}
          label="Type Something..."
        />

        <RoundedButton
          style={styles.button}
          size={50}
          title="+"
          onPress={() => addSubject(focusItem)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: paddingSizes.md,
    justifyContent: "top",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    padding: fontSizes.md,
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    // padding: 25,
    // justifyContent: "top",
    flexDirection: "row",
  },
  textinput: {
    flex: 1,
    marginRight: paddingSizes.sm,
  },
  button: {
    alignSelf: "center",
  },
  // text: {
  //   color: colors.darkBlue,
  // },
});
