import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { paddingSizes } from "../utils/sizes";
import { colors } from "../utils/colors";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";
const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ subject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(subject);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => setProgress(progress)}
          // onEnd={() => Vibration.vibrate(PATTERN)}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: paddingSizes.xxl }}>
          <Text style={styles.title}>Focusing On :</Text>
          <Text style={styles.task}>{subject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: paddingSizes.sm }}>
        <ProgressBar
          progress={progress}
          backgroundColor="red"
          style={{ height: paddingSizes.sm }}
        />
      </View>
      <View style={styles.timingwrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.button}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clear}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
      {/* <Text>Timer {subject}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timingwrapper: {
    paddingTop: paddingSizes.md,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "red",
    fontWeight: "bold",
    // textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
  clear: {
    justifyContent: "center",
    alignItems: "center",
  },
});
