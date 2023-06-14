import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const DisagreePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.disagreePage}>
      <View style={styles.sistemaBarraArriba}>
        <Text style={styles.time}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
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
      <Text style={[styles.noEstDe, styles.aFlexBox]}>
        ¿NO ESTÁ DE ACUERDO? CUÉNTANOS POR QUÉ
      </Text>
      <TextInput
        style={[styles.frameBusqueda, styles.frameBusquedaSpaceBlock]}
        placeholder="Escribe la razón aquí..."
        keyboardType="default"
        placeholderTextColor="#9e9e9e"
      />
      <Pressable
        style={[styles.botonEnviarFeedback, styles.frameBusquedaSpaceBlock]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
        }
      >
        <Text style={[styles.a, styles.aFlexBox]}>ENVIAR</Text>
      </Pressable>
      <Pressable
        style={styles.wrapper}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
        }
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  aFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.black,
  },
  frameBusquedaSpaceBlock: {
    padding: Padding.p_3xs,
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
    textAlign: "center",
    color: Color.black,
    top: "50%",
    position: "absolute",
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
  },
  capIcon: {
    marginTop: -2,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
  },
  capacity: {
    marginTop: -3.67,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.black,
    width: 18,
    height: 7,
  },
  battery: {
    marginTop: -4.67,
    right: 14,
    width: 24,
    height: 11,
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
    right: 0,
    position: "absolute",
  },
  noEstDe: {
    top: 168,
    left: 52,
    fontSize: FontSize.size_mid,
    fontWeight: "700",
    fontFamily: FontFamily.niramitBold,
    textAlign: "left",
    width: 198,
    position: "absolute",
  },
  frameBusqueda: {
    top: 227,
    left: 34,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.white,
    width: 322,
    height: 403,
    flexDirection: "row",
    fontWeight: "600",
    fontFamily: FontFamily.niramitSemibold,
    fontSize: FontSize.size_lg,
  },
  a: {
    alignSelf: "stretch",
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    justifyContent: "center",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    flex: 1,
  },
  botonEnviarFeedback: {
    top: 712,
    left: 31,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkorange,
    width: 328,
    height: 42,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 33,
    top: 67,
    width: 68,
    height: 68,
    position: "absolute",
  },
  disagreePage: {
    backgroundColor: Color.antiquewhite,
    height: 844,
    width: "100%",
    flex: 1,
  },
});

export default DisagreePage;
