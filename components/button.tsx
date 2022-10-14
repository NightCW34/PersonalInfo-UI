import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const Button = () => {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: "15%" }}
    >
      <TouchableOpacity style={styles.btn_style}>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontFamily: "Rubik_500Medium",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn_style: {
    width: "85%",
    backgroundColor: "#0EBE7E",
    alignItems: "center",
    height: "50%",
    justifyContent: "center",
    borderRadius: 15,
  },
});
