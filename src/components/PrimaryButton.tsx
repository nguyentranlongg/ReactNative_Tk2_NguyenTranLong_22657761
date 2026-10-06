import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export default function PrimaryButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    backgroundColor: "#f44343",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
