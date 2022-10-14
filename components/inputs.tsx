import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const Inputs = ({
  label,
  iconName,
  title,
  onFocus = () => {},
  ...props
}: any) => {
  return (
    <View style={{ marginBottom: 20, alignItems: "center" }}>
      <View style={[styles.inputContainer]}>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
          <TextInput style={styles.placeholder} {...props} />
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Icon name={iconName} size={20} />
        </View>
      </View>
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  placeholder: {
    marginVertical: 5,
    fontSize: 18,
    color: "#8A92AC",
    fontFamily: "Rubik_400Regular",
    width: "100%",
  },
  title: {
    marginVertical: 5,
    fontSize: 14,
    color: "#0EBE7E",
    fontFamily: "Rubik_500Medium",
  },
  inputContainer: {
    height: 65,
    width: "90%",
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 10,
  },
});
