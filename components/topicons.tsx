import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

//Icons
import { Feather } from "@expo/vector-icons";

const Topicons = () => {
  return (
    <View style={styles.top_icons}>
      <TouchableOpacity style={styles.icon_container}>
        <Feather name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.text_container}>
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Rubik_500Medium",
            fontSize: 20,
          }}
        >
          Profile
        </Text>
      </View>
    </View>
  );
};

export default Topicons;

const styles = StyleSheet.create({
  top_icons: {
    flexDirection: "row",
    width: "100%",

    alignItems: "center",
  },
  icon_container: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 30,
    height: 30,
    borderRadius: 10,
    margin: 20,
  },
  text_container: {},
});
