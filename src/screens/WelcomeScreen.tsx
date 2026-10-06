import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { bikes } from "../data/bikes";
import PrimaryButton from "../components/PrimaryButton";

interface Props {
  onGetStarted: () => void;
}

export default function WelcomeScreen({
  onGetStarted,
}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>

        <Text style={styles.introText}>
          A premium online store for
        </Text>

        <Text style={styles.introText}>
          sporter and their stylish choice
        </Text>

        <View style={styles.imageBox}>
          <Image
            source={bikes[1].image}
            style={styles.image}
          />
        </View>

        <Text style={styles.shopText}>
          POWER BIKE
        </Text>

        <Text style={styles.shopText}>
          SHOP
        </Text>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Get Started"
            onPress={onGetStarted}
          />
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
    alignItems: "center",
  },

  introText: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "600",
    color: "#222",
  },

  imageBox: {
    width: "100%",
    height: 200,
    backgroundColor: "#f9e7e7",
    borderRadius: 25,
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  shopText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 3,
  },

  buttonContainer: {
    position: "absolute",
    bottom: 25,
    left: 18,
    right: 18,
  },
});
