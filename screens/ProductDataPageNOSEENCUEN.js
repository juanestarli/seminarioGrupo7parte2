import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ProductDataPageNOSEENCUEN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productDataPageNoSeEncuen}>

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
      <Image
        style={styles.iconTimesCircle}
        contentFit="cover"
        source={require("../assets/imagenPrdcoNoEncontrado.png")}
      />
      <Text style={[styles.noPudimosEncontrar, styles.volverAEscanearFlexBox]}>
        NO SE ENCONTRÓ EL PRODUCTO. ESCANEE DE NUEVO O INTENTE CON UN UNO DIFERENTE.
      </Text>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("ScanPage")}
      >
        <View style={styles.volverAEscanearWrapper}>
          <Text style={[styles.volverAEscanear, styles.volverAEscanearFlexBox]}>
            SEGUIR ESCANEANDO
          </Text>
        </View>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    top: -45,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  volverAEscanearFlexBox: {
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
    color: Color.black,
  },
  time: {
    marginTop: -8,
    left: 21,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    width: 54,
    color: Color.black,
    textAlign: "center",
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
    left: 0,
    height: 40,
    right: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 17,
    top: 30,
    width: 68,
    height: 68,
    position: "absolute",
  },
  iconTimesCircle: {
    height: 180,
    width: 180,
    top: 130,
    bottom: "50%",
    left: 105,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  noPudimosEncontrar: {
    top: 400,
    left: 35,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interBold,
    justifyContent: "center",
    width: 316,
    textAlign: "center",
    position: "absolute",
  },
  volverAEscanear: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.workSansBold,
    textAlign: "right",
    width: 263,
    top: 14,
  },
  volverAEscanearWrapper: {
    top: -40,
    left: 34,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.chocolate,
    width: 315,
    height: 75,
    flexDirection: "row",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  groupChild: {
    left: -4,
    width: 92,
    height: 92,
  },
  frameParent: {
    top: 689,
    left: 20,
    width: 333,
    height: 38,
    position: "absolute",
  },
  productDataPageNoSeEncuen: {
    backgroundColor: Color.antiquewhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProductDataPageNOSEENCUEN;
