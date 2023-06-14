import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ProductDataPageAPTO = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productDataPageApto}>
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
      <View style={[styles.aptoParaSuConsumoWrapper, styles.wrapperSpaceBlock]}>
        <Text style={[styles.aptoParaSu, styles.aptoParaSuTypo]}>{`APTO PARA SU
CONSUMO`}</Text>
      </View>
      <Pressable
        style={styles.noEstDeContainer}
        onPress={() => navigation.navigate("DisagreePage")}
      >
        <Text style={[styles.noEstDeAcuerdo, styles.aptoParaSuTypo]}>
          ¿NO ESTÁ DE ACUERDO?
        </Text>
      </Pressable>
      <Image
        style={[styles.iconCheckCircle, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/ImagenApto.png")}
      />
      <Pressable
        style={[styles.frameParent, styles.tarjetaLayout]}
        onPress={() => navigation.navigate("ScanPage")}
      >
        <View
          style={[styles.seguirEscaneandoWrapper, styles.wrapperSpaceBlock]}
        >
          <Text style={[styles.seguirEscaneando, styles.milanesaDeSojaTypo]}>
            {" "}
            SEGUIR ESCANEANDO
          </Text>
        </View>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-11.png")}
        />
      </Pressable>
      <Pressable
        style={styles.wrapper}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
        }
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.tarjeta, styles.tarjetaLayout]}
        onPress={() => navigation.navigate("Nutriscore")}
      >
        <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
        <Image
          style={[styles.image5Icon, styles.image5IconLayout]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Text style={[styles.milanesaDeSoja, styles.milanesaDeSojaTypo]}>
          NOMBRE DEL PRODUCTO
        </Text>
      </Pressable>
      <ImageBackground
        style={styles.image13Icon}
        resizeMode="cover"
        source={require("../assets/image13.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  aptoParaSuTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tarjetaLayout: {
    width: 333,
    left: 29,
  },
  milanesaDeSojaTypo: {
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    color: Color.black,
  },
  image5IconLayout: {
    borderRadius: Border.br_5xs,
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
    color: Color.black,
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
    left: 0,
    height: 40,
    top: 0,
  },
  aptoParaSu: {
    fontSize: FontSize.size_5xl,
    color: Color.white,
    flex: 1,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  aptoParaSuConsumoWrapper: {
    top: 327,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.seagreen,
    width: 333,
    left: 29,
  },
  noEstDeAcuerdo: {
    fontSize: FontSize.size_sm,
    textDecoration: "underline",
    color: Color.black,
  },
  noEstDeContainer: {
    left: 206,
    top: 802,
    position: "absolute",
  },
  iconCheckCircle: {
    height: "25.24%",
    width: "54.62%",
    top: "10.9%",
    right: "22.56%",
    bottom: "63.86%",
    left: "22.82%",
    position: "absolute",
  },
  seguirEscaneando: {
    alignSelf: "stretch",
    fontFamily: FontFamily.workSansBold,
    textAlign: "right",
    width: 271,
  },
  seguirEscaneandoWrapper: {
    top: 4,
    left: 34,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.chocolate,
    width: 299,
    height: 75,
  },
  groupChild: {
    left: -4,
    width: 92,
    height: 92,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    top: 689,
    height: 84,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 17,
    top: 62,
    width: 68,
    height: 68,
    position: "absolute",
  },
  tarjetaChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.darkorange,
    height: "100%",
    width: "100%",
  },
  image5Icon: {
    height: "78.13%",
    width: "30.03%",
    top: "10.94%",
    right: "64.26%",
    bottom: "10.94%",
    left: "5.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  milanesaDeSoja: {
    width: "64.26%",
    top: "32.81%",
    left: "35.74%",
    fontFamily: FontFamily.niramitBold,
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
  },
  tarjeta: {
    top: 435,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 128,
    position: "absolute",
  },
  image13Icon: {
    top: 405,
    left: 328,
    borderRadius: 200,
    width: 49,
    height: 60,
    position: "absolute",
  },
  productDataPageApto: {
    backgroundColor: Color.antiquewhite,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default ProductDataPageAPTO;
