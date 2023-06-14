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
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const Nutriscore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nutriscore}>
      <View style={[styles.sistemaBarraArriba, styles.frameParentPosition]}>
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
      <View style={styles.tarjeta}>
        <View style={[styles.tarjetaChild, styles.iconLayout]} />
        <Image
          style={[styles.image5Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Text style={[styles.milanesaDeSoja, styles.milanesaDeSojaTypo]}>
          NOMBRE DEL PRODUCTO
        </Text>
      </View>
      <Image
        style={[styles.image10Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
      <Pressable
        style={styles.wrapper}
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
      <ImageBackground
        style={styles.image15Icon}
        resizeMode="cover"
        source={require("../assets/imagennutriscore.png")}
      />
      <ImageBackground
        style={styles.image14Icon}
        resizeMode="cover"
        source={require("../assets/image14.png")}
      />
      <Text
        style={[
          styles.aspectosPositivosRaznContainer,
          styles.aspectosContainerTypo,
        ]}
      >
        <Text style={styles.aspectosPositivosRaznContainer1}>
          <Text style={styles.aspectosPositivos}>{`ASPECTOS POSITIVOS:
`}</Text>
          <Text style={styles.raznPositivaRaznPositiva}>
            <Text style={styles.blankLine}> </Text>
            <Text style={styles.raznPositivaRaznPositiva1}>{`Razón positiva
Razón positiva`}</Text>
          </Text>
        </Text>
      </Text>
      <Text
        style={[
          styles.aspectosNegativosRaznContainer,
          styles.aspectosContainerTypo,
        ]}
      >
        <Text style={styles.aspectosPositivosRaznContainer1}>
          <Text style={styles.aspectosNegativos}>{`ASPECTOS NEGATIVOS:
`}</Text>
          <Text style={styles.raznPositivaRaznPositiva}>
            <Text style={styles.blankLine}> </Text>
            <Text style={styles.raznPositivaRaznPositiva1}>{`Razón negativa
Razón negativa`}</Text>
          </Text>
        </Text>
      </Text>
      <Text style={[styles.nutriScore, styles.nutriScoreTypo]}>
        NUTRI-SCORE:
      </Text>
      <Pressable
        style={[styles.nutriscoreInner, styles.frameParentLayout]}
        onPress={() => navigation.navigate("ScanPage")}
      >
        <Pressable
          style={[styles.frameParent, styles.frameParentLayout]}
          onPress={() => navigation.navigate("ScanPage")}
        >
          <View style={styles.seguirEscaneandoWrapper}>
            <Text style={[styles.seguirEscaneando, styles.milanesaDeSojaTypo]}>
              {" "}
              SEGUIR ESCANEANDO
            </Text>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/group-1.png")}
          />
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: 0,
    top: 0,
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  milanesaDeSojaTypo: {
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    color: Color.black,
  },
  aspectosContainerTypo: {
    width: 326,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 29,
    position: "absolute",
  },
  nutriScoreTypo: {
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    position: "absolute",
  },
  frameParentLayout: {
    height: 84,
    width: 333,
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
    height: 40,
    right: 0,
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
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  milanesaDeSoja: {
    width: "64.26%",
    top: "34.38%",
    left: "35.74%",
    justifyContent: "center",
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    position: "absolute",
  },
  tarjeta: {
    top: 237,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 128,
    width: 333,
    left: 29,
    position: "absolute",
  },
  image10Icon: {
    top: 251,
    left: 48,
    width: 100,
    height: 100,
  },
  iconLayout1: {
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
  image15Icon: {
    top: 92,
    left: 82,
    borderRadius: 35,
    width: 242,
    height: 133,
    position: "absolute",
  },
  image14Icon: {
    top: 418,
    left: 170,
    borderRadius: 18,
    width: 49,
    height: 65,
    position: "absolute",
  },
  aspectosPositivos: {
    color: Color.seagreen,
    fontSize: FontSize.size_xl,
  },
  blankLine: {
    fontSize: FontSize.size_3xs,
  },
  raznPositivaRaznPositiva1: {
    fontSize: FontSize.size_lg,
  },
  raznPositivaRaznPositiva: {
    color: Color.black,
  },
  aspectosPositivosRaznContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  aspectosPositivosRaznContainer: {
    top: 495,
  },
  aspectosNegativos: {
    color: Color.brown,
    fontSize: FontSize.size_xl,
  },
  aspectosNegativosRaznContainer: {
    top: 585,
  },
  nutriScore: {
    top: 377,
    left: 107,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
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
    flexDirection: "row",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  groupChild: {
    left: -4,
    width: 92,
    height: 92,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    left: 0,
    top: 0,
  },
  nutriscoreInner: {
    top: 689,
    left: 29,
    height: 84,
  },
  nutriscore: {
    backgroundColor: Color.antiquewhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Nutriscore;
