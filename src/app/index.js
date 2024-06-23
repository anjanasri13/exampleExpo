import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

// You can import supported modules from npm
// import { Card } from "react-native-paper";

// or any files within the Snack
// import AssetExample from "./components/AssetExample";
import { colors } from "./utils/colors";
import { Focus } from "./features/Focus";
import React, { useState } from "react";
import { Timer } from "../app/features/Timer";
import { FoucsHistory } from "../app/features/FocusHistory";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? (
        <Timer
          subject={focusSubject}
          onTimerEnd={(subject) => setHistory([...history, subject])}
          clearSubject={() => setFocusSubject(null)}
        />
      ) : (
        // <View>
        //   <Text style={{ color: colors.white }}>
        //     I'm going to render the timer {focusSubject}
        //   </Text>
        // </View>
        <>
          <Focus addSubject={setFocusSubject} />
          <FoucsHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    backgroundColor: colors.darkBlue,
  },
});
