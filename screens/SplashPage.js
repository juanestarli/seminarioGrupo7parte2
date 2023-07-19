import * as React from "react";
import { Text, StyleSheet, View, Pressable, Animated, Easing } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { useEffect, useRef } from 'react';

const SplashPage = () => {
  const navigation = useNavigation();

  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    rotateAnimation.start();

    return () => {
      rotateAnimation.stop();
    };
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.splashPage, styles.iconLayout]}>
      
      <Text style={[styles.checkIt, styles.timeFlexBox]}>CHECK-EAT</Text>
      <Image
        style={styles.splashPageChild}
        contentFit="cover"
        source={require("../assets/loguito2.png")}
      />
      <Pressable
        style={styles.iconSpinnerAlt}
      >
        <Animated.Image
          source={require("../assets/-icon-spinneralt.png")}
          style={{ width: 80, height: 80, left: -4, transform: [{ rotate: spin }] }}
        />
      </Pressable>
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
    top: 340,
    left: 60,
    fontSize: FontSize.size_29xl,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
  },
  splashPageChild: {
    top: 150,
    left: 107,
    width: 175,
    height: 178,
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
