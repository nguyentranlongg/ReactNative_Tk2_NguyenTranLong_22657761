import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Bike } from "../types/Bike";

interface Props {
  bike: Bike;
  onPress: () => void;
}

export default function BikeCard({
  bike,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Ionicons
        name="heart-outline"
        size={18}
        color="#555"
        style={styles.heart}
      />

      <Image
        source={bike.image}
        style={styles.image}
      />

      <Text style={styles.name}>
        {bike.name}
      </Text>

      <Text style={styles.price}>
        $ {bike.price}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 110,
    backgroundColor: "#fff5ed",
    borderRadius: 6,
    marginBottom: 8,
    alignItems: "center",
    padding: 5,
  },

  heart: {
    alignSelf: "flex-start",
  },

  image: {
    width: "80%",
    height: 60,
    resizeMode: "contain",
  },

  name: {
    fontSize: 9,
    color: "#555",
  },

  price: {
    fontSize: 9,
    fontWeight: "bold",
    marginTop: 2,
  },
});
