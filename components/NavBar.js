import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const NavBar = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.navBar, style]}>
      <View style={[styles.navBarChild, styles.iconLayout]} />
      <Pressable
        style={styles.iconBookSaved}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HistorialPage" })
        }
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-book-saved.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  iconPosition: {
    top: "12.5%",
    position: "absolute",
  },
  navBarChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    backgroundColor: Color.gray_100,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconBookSaved: {
    left: "75.38%",
    top: "16.07%",
    right: "13.01%",
    bottom: "11.88%",
    width: "11.6%",
    height: "72.05%",
    position: "absolute",
  },
  navBar: {
    width: 390,
    height: 56,
  },
});

export default NavBar;
