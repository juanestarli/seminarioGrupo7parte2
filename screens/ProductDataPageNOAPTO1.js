import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const ProductDataPageNOAPTO1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productDataPageNoApto}>
      <View style={[styles.sistemaBarraArriba, styles.groupChildPosition]}>
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
      <Pressable
        style={styles.tarjeta}
        onPress={() => navigation.navigate("ProductDataPageSINRESTRICCION")}
      >
        <View style={[styles.tarjetaChild, styles.iconLayout1]} />
        <Image
          style={[styles.image5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Text style={styles.milanesaDeSoja}>NOMBRE DEL PRODUCTO</Text>
      </Pressable>
      <Image
        style={styles.image10Icon}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
      <Text style={[styles.elProductoNo, styles.restriccinFlexBox]}>
        EL PRODUCTO NO ES APTO PARA SU CONSUMO
      </Text>
      <Image
        style={[styles.iconTimesCircle, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-timescircle.png")}
      />
      <Text style={[styles.restriccin, styles.restriccinFlexBox]}>
        RESTRICCIÓN
      </Text>
      <Pressable
        style={styles.noEstDeContainer}
        onPress={() => navigation.navigate("DisagreePage")}
      >
        <Text style={[styles.noEstDeAcuerdo, styles.elProductoNoTypo]}>
          ¿NO ESTÁ DE ACUERDO?
        </Text>
      </Pressable>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("ScanPage")}
      >
        <View style={[styles.seguirEscaneandoWrapper, styles.wrapperLayout]}>
          <Text style={styles.seguirEscaneando}>SEGUIR ESCANEANDO</Text>
        </View>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/group-15.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
        }
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    top: 0,
    position: "absolute",
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  restriccinFlexBox: {
    width: 316,
    left: 37,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  elProductoNoTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.black,
  },
  wrapperLayout: {
    height: 68,
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
    left: 0,
    height: 40,
    right: 0,
  },
  tarjetaChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.darkorange,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  image5Icon: {
    height: "78.13%",
    width: "30.03%",
    top: "10.94%",
    right: "64.26%",
    bottom: "10.94%",
    left: "5.71%",
    borderRadius: Border.br_5xs,
  },
  milanesaDeSoja: {
    width: "64.26%",
    top: "34.38%",
    left: "35.74%",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  tarjeta: {
    top: 144,
    left: 28,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 333,
    height: 128,
    position: "absolute",
  },
  image10Icon: {
    top: 158,
    left: 47,
    width: 100,
    height: 100,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  elProductoNo: {
    top: 547,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.black,
  },
  iconTimesCircle: {
    height: "25.12%",
    width: "54.36%",
    top: "36.61%",
    right: "22.82%",
    bottom: "38.27%",
    left: "22.82%",
  },
  restriccin: {
    top: 640,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    color: Color.red,
  },
  noEstDeAcuerdo: {
    fontSize: FontSize.size_sm,
    textDecoration: "underline",
    textAlign: "center",
  },
  noEstDeContainer: {
    left: 203,
    top: 798,
    position: "absolute",
  },
  seguirEscaneando: {
    alignSelf: "stretch",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.workSansBold,
    textAlign: "right",
    width: 212,
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
    color: Color.black,
  },
  seguirEscaneandoWrapper: {
    top: 4,
    left: 31,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.chocolate,
    width: 226,
    flexDirection: "row",
    padding: Padding.p_3xs,
  },
  groupChild: {
    left: -4,
    width: 84,
    height: 84,
  },
  frameParent: {
    top: 693,
    left: 66,
    width: 257,
    height: 76,
    position: "absolute",
  },
  wrapper: {
    left: 17,
    top: 62,
    width: 68,
  },
  productDataPageNoApto: {
    backgroundColor: Color.antiquewhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProductDataPageNOAPTO1;
