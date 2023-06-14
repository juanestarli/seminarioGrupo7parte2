import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SplashPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.splashPage, styles.iconLayout]}>
      <View style={[styles.sistemaBarraArriba, styles.capIconPosition]}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      <Text style={[styles.checkIt, styles.timeFlexBox]}>CHECK IT</Text>
      <Image
        style={styles.splashPageChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable
        style={styles.iconSpinnerAlt}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-spinneralt.png")}
        />
      </Pressable>
      <Text style={styles.c}>C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    width: 54,
    top: "50%",
  },
  border: {
    marginTop: -5.67,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: "50%",
    position: "absolute",
  },
  capIcon: {
    marginTop: -2,
    width: 1,
    height: 4,
    opacity: 0.4,
    top: "50%",
  },
  capacity: {
    marginTop: -3.67,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.black,
    width: 18,
    height: 7,
    top: "50%",
    position: "absolute",
  },
  battery: {
    marginTop: -4.67,
    right: 14,
    width: 24,
    height: 11,
    top: "50%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  sistemaBarraArriba: {
    top: 0,
    left: 0,
    height: 40,
  },
  checkIt: {
    top: 413,
    left: 80,
    fontSize: FontSize.size_29xl,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
  },
  splashPageChild: {
    top: 243,
    left: 119,
    width: 153,
    height: 153,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconSpinnerAlt: {
    left: "40.51%",
    top: "66.82%",
    right: "40.51%",
    bottom: "24.41%",
    width: "18.97%",
    height: "8.77%",
    position: "absolute",
  },
  c: {
    top: 265,
    left: 171,
    fontSize: FontSize.size_91xl,
    fontFamily: FontFamily.londrinaShadowRegular,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 49,
    height: 110,
    color: Color.black,
    position: "absolute",
  },
  splashPage: {
    backgroundColor: Color.antiquewhite,
    flex: 1,
    height: 844,
  },
});

export default SplashPage;
