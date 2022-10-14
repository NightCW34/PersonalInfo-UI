import React from "react";
import { View, Image, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const Profilephoto = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 10 }}>
      <Image
        style={styles.avatar}
        source={require("../assets/images/Avatar.png")}
      />
      <View style={styles.camera}>
        <FontAwesome name="camera" size={20} color="white" />
      </View>
    </View>
  );
};

export default Profilephoto;
const styles = StyleSheet.create({
  avatar: {
    width: 140,
    height: 140,
  },
  camera: {
    backgroundColor: "#56828F",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    zIndex: 1,
    top: -50,
    right: -55,
    opacity: 0.9,
  },
});
