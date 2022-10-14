import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import BodyElements from "./bodyElements";
import Button from "./button";

//Custom Components
import HeaderElements from "./headerElements";

const Content = () => {
  return (
    <View style={{ backgroundColor: "#F9F7F8" }}>
      <View style={styles.header}>
        <HeaderElements />
      </View>
      <ScrollView>
        <BodyElements />
      </ScrollView>
      <Button />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0EBE7E",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
