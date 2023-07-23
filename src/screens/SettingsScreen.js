import { View, Text, Button } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";

const SettingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => Auth.signOut()} title="sign out"></Button>
    </View>
  );
};

export default SettingScreen;
