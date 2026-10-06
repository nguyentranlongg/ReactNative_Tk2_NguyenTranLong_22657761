import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Bike } from "../types/Bike";
import PrimaryButton from "../components/PrimaryButton";

interface Props {
  bike: Bike;
  onBack: () => void;
}

export default function DetailScreen({
  bike,
  onBack,
}: Props) {
  const addToCart = () => {
    Alert.alert(
      "Thông báo",
      "Đã thêm xe vào giỏ hàng!"
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>

        <TouchableOpacity
          style={styles.back}
          onPress={onBack}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#333"
          />
        </TouchableOpacity>

        <View style={styles.imageBox}>
          <Image
            source={bike.image}
            style={styles.image}
          />
        </View>

        <Text style={styles.name}>
          {bike.name}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.discount}>
            15% OFF ${bike.price}
          </Text>

          <Text style={styles.oldPrice}>
            {bike.price + 500}$
          </Text>
        </View>

        <Text style={styles.descriptionTitle}>
          Description
        </Text>

        <Text style={styles.description}>
          It is a very important form of writing as we
          write almost everything in paragraphs, be it
          an answer, essay, story, emails, etc.
        </Text>

        <View style={styles.bottom}>
          <TouchableOpacity>
            <Ionicons
              name="heart-outline"
              size={27}
              color="#222"
            />
          </TouchableOpacity>

          <View style={styles.addButton}>
            <PrimaryButton
              title="Add to card"
              onPress={addToCart}
            />
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },

  screen: {
    flex: 1,
    margin: 30,
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 8,
  },

  back: {
    position: "absolute",
    zIndex: 10,
    top: 12,
    left: 12,
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  imageBox: {
    height: 200,
    backgroundColor: "#fdeeee",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  name: {
    fontSize: 18,
    marginTop: 12,
    color: "#222",
  },

  priceRow: {
    flexDirection: "row",
    marginTop: 8,
  },

  discount: {
    color: "#777",
    fontSize: 11,
  },

  oldPrice: {
    textDecorationLine: "line-through",
    marginLeft: 30,
    fontSize: 11,
  },

  descriptionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 15,
  },

  description: {
    fontSize: 10,
    color: "#777",
    lineHeight: 17,
    marginTop: 8,
  },

  bottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    gap: 15,
  },

  addButton: {
    flex: 1,
  },
});
