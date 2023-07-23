import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import { onUpdateChatRoom } from "../graphql/subscriptions";
import ContactListItem from "../components/ContactListItem";
import React from "react";
import { getChatRoom } from "../graphql/queries";

const GroupInfoScreen = () => {
  return (
    <View>
      <Text>GroupInfoScreen</Text>
    </View>
  );
};

export default GroupInfoScreen;
