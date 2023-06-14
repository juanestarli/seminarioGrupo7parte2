import * as React from "react";
import { Pressable, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconUser1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconUser, style]}
      onPress={() => navigation.navigate("RestrictionsPage")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-icon-user.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconUser: {
    width: 37,
    height: 42,
  },
});

export default IconUser1;
