import * as React from "react";
import { Pressable, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconHome2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconHome2, style]}
      onPress={() => navigation.navigate("HomePage")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-icon-home-2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconHome2: {
    width: 40,
    height: 40,
  },
});

export default IconHome2;
