import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const ScanPage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.scanPage2}>
      <Image
        style={styles.whatsappImage20230517At1}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20230517-at-1525-1.png")}
      />
      <Image
        style={[styles.scanPage2Child, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.scanPage2Item, styles.scanLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.scanPage2Inner, styles.scanLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressablePosition]}
        onPress={() => navigation.navigate("ProductDataPageSINRESTRICCION")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ProductDataPageAPTO")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-12.png")}
        />
      </Pressable>
      <View style={styles.ubicaElCdigoDeBarrasDelWrapper}>
        <Text style={[styles.ubicaElCdigoContainer, styles.timeTypo]}>
          <Text style={styles.ubicaEl}>{`Ubica el `}</Text>
          <Text style={styles.cdigoDeBarras}>CÓDIGO DE BARRAS</Text>
          <Text style={styles.ubicaEl}>{` del producto dentro del `}</Text>
          <Text style={styles.cdigoDeBarras}>cuadro</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.sistemaBarraArriba, styles.rectanglePressablePosition]}
        onPress={() => navigation.navigate("ProductDataPageNOAPTO1")}
      >
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        <View style={[styles.battery, styles.timePosition]}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={[styles.capIcon, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={[styles.capacity, styles.timePosition]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    height: 66,
    width: 66,
    borderRadius: Border.br_6xl,
    left: 70,
    position: "absolute",
  },
  scanLayout: {
    left: 320,
    height: 66,
    width: 66,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  rectanglePressablePosition: {
    left: 0,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  whatsappImage20230517At1: {
    top: -387,
    left: -266,
    width: 841,
    height: 1495,
    position: "absolute",
  },
  scanPage2Child: {
    top: 232,
  },
  scanPage2Item: {
    top: 488,
  },
  scanPage2Inner: {
    top: 232,
  },
  vectorIcon: {
    top: 488,
  },
  rectanglePressable: {
    top: 707,
    backgroundColor: "rgba(108, 108, 108, 0.6)",
    width: 390,
    height: 137,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 145,
    top: 726,
    width: 100,
    height: 100,
    position: "absolute",
  },
  ubicaEl: {
    color: Color.white,
  },
  cdigoDeBarras: {
    color: Color.darkorange,
  },
  ubicaElCdigoContainer: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 231,
  },
  ubicaElCdigoDeBarrasDelWrapper: {
    top: 634,
    backgroundColor: "rgba(32, 32, 32, 0.4)",
    flexDirection: "row",
    padding: Padding.p_3xs,
    borderRadius: Border.br_6xl,
    left: 70,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    width: 54,
    color: Color.white,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
  },
  border: {
    marginTop: -5.67,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
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
    backgroundColor: Color.white,
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
    backgroundColor: "rgba(101, 101, 101, 0.25)",
    height: 40,
    right: 0,
  },
  scanPage2: {
    backgroundColor: Color.black,
    flex: 1,
    height: 844,
    overflow: "hidden",
    display: "none",
    width: "100%",
  },
});

export default ScanPage2;
