import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const ScanPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.scanPage}>
      <View style={[styles.sistemaBarraArriba, styles.rectangleViewPosition]}>
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
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
      </View>
      <Image
        style={[styles.scanPageChild, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.scanPageItem, styles.scanLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.scanPageInner, styles.scanLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Pressable
        style={styles.wrapper}
        onPress={() =>
          navigation.navigate("ProductDataPageNOSEENCUENTRAPRODUCTO")
        }
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
        style={styles.container}
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
  rectangleViewPosition: {
    backgroundColor: Color.gray_200,
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
  vectorIconLayout: {
    height: 71,
    width: 71,
    left: 68,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  scanLayout: {
    left: 252,
    height: 71,
    width: 71,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 21,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    width: 54,
    color: Color.white,
    top: "50%",
    position: "absolute",
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
    height: 40,
    right: 0,
  },
  scanPageChild: {
    top: 230,
  },
  scanPageItem: {
    top: 420,
  },
  scanPageInner: {
    top: 230,
  },
  vectorIcon: {
    top: 420,
  },
  rectangleView: {
    top: 707,
    width: 390,
    height: 137,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 141,
    top: 726,
    width: 108,
    height: 108,
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
    left: 70,
    backgroundColor: "rgba(175, 175, 175, 0.4)",
    flexDirection: "row",
    padding: Padding.p_3xs,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  container: {
    left: 281,
    top: 755,
    width: 68,
    height: 68,
    position: "absolute",
  },
  scanPage: {
    backgroundColor: Color.black,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ScanPage;
