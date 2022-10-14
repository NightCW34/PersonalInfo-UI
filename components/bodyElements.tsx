import React from "react";
import { View, Text } from "react-native";

//Custom Components
import Inputs from "./inputs";

const BodyElements = () => {
  return (
    <View>
      <View style={{ margin: 15 }}>
        <Text
          style={{
            fontFamily: "Rubik_500Medium",
            fontSize: 18,
            paddingLeft: 10,
          }}
        >
          Personal Information
        </Text>
      </View>
      <Inputs placeholder="Abdullah Mamun" title="Name" />
      <Inputs
        title="Contact Number"
        iconName="pencil"
        placeholder="+80005484848"
      />
      <Inputs
        title="Date of birth"
        iconName="pencil"
        placeholder="DD MM YYYY"
      />
      <Inputs title="Location" placeholder="Add Details" />
    </View>
  );
};

export default BodyElements;
