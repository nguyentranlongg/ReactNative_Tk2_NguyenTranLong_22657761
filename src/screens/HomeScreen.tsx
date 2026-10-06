import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

import BikeCard from "../components/BikeCard";
import CategoryButton from "../components/CategoryButton";
import { bikes } from "../data/bikes";
import { Bike } from "../types/Bike";

interface Props {
  onSelectBike: (bike: Bike) => void;
}

export default function HomeScreen({
  onSelectBike,
}: Props) {
  const [category, setCategory] = useState("All");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        The world's Best Bike
      </Text>

      <View style={styles.categories}>
        <CategoryButton
          title="All"
          active={category === "All"}
          onPress={() => setCategory("All")}
        />

        <CategoryButton
          title="Roadbike"
          active={category === "Roadbike"}
          onPress={() => setCategory("Roadbike")}
        />

        <CategoryButton
          title="Mountain"
          active={category === "Mountain"}
          onPress={() => setCategory("Mountain")}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {bikes.map((bike) => (
            <BikeCard
              key={bike.id}
              bike={bike}
              onPress={() => onSelectBike(bike)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 8,
  },

  title: {
    color: "#f33d3d",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
