import * as React from "react";
import { Pressable, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const IconBookSaved = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.iconBookSaved, style]}
      onPress={() => navigation.navigate("HistorialPage")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/-icon-book-saved.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  iconBookSaved: {
    width: 45,
    height: 40,
  },
});

export default IconBookSaved;
