import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Props {
  title: string;
  active: boolean;
  onPress: () => void;
}

export default function CategoryButton({
  title,
  active,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        active && styles.active,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          active && styles.activeText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#ffcccc",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 3,
  },

  active: {
    borderColor: "#ff7777",
  },

  text: {
    color: "#aaa",
    fontSize: 9,
  },

  activeText: {
    color: "#ff4444",
  },
});
