import React, { useState } from "react";
import { StatusBar } from "react-native";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";

import { Bike } from "./src/types/Bike";

export default function App() {
  const [screen, setScreen] = useState(1);

  const [selectedBike, setSelectedBike] =
    useState<Bike | null>(null);

  // Screen 01
  if (screen === 1) {
    return (
      <>
        <StatusBar barStyle="dark-content" />

        <WelcomeScreen
          onGetStarted={() => setScreen(2)}
        />
      </>
    );
  }

  // Screen 02
  if (screen === 2) {
    return (
      <>
        <StatusBar barStyle="dark-content" />

        <HomeScreen
          onSelectBike={(bike) => {
            setSelectedBike(bike);
            setScreen(3);
          }}
        />
      </>
    );
  }

  // Screen 03
  return (
    <>
      <StatusBar barStyle="dark-content" />

      {selectedBike && (
        <DetailScreen
          bike={selectedBike}
          onBack={() => setScreen(2)}
        />
      )}
    </>
  );
}
