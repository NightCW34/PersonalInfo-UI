import React from "react";
import { View } from "react-native";

//Custom Components
import Topicons from "./topicons";
import Profiletexts from "./profiletexts";
import Profilephoto from "./profilephoto";

const HeaderElements = () => {
  return (
    <View>
      <Topicons />
      <Profiletexts />
      <Profilephoto />
    </View>
  );
};

export default HeaderElements;
