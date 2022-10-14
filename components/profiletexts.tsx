import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Profiletexts = () => {
  return (
    <View style={styles.txt_container}>
      <Text style={styles.txt_title}>Set up your profile</Text>
      <Text style={styles.txt_dsc}>
        Update your profile to connect your doctor with
      </Text>
      <Text style={styles.txt_dsc}>better impression</Text>
    </View>
  );
};

export default Profiletexts;

const styles = StyleSheet.create({
  txt_container: {
    alignItems: "center",
  },
  txt_title: {
    fontFamily: "Rubik_400Regular",
    color: "#FFFFFF",
    fontSize: 18,
    paddingBottom: 5,
  },
  txt_dsc: {
    fontFamily: "Rubik_300Light",
    color: "#FFFFFF",
    fontSize: 14,
  },
});
