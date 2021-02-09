import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, , Text, View } from "react-native";
import image from "./assets/components/prueba.png";
//import RNDraw from "rn-draw";
import Whiteboard from "./assets/components/Whiteboard";

export default function App() {
  return (
    <View style={styles.container}>
      
        <Whiteboard></Whiteboard>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
