import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ProductSearchPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productSearchPage}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <Text style={styles.eresAdministrador}>¿Eres administrador?</Text>
      <View style={[styles.sistemaBarraArriba, styles.capIconPosition]}>
        <Text style={[styles.time, styles.timeClr]}>9:41</Text>
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
      <TextInput
        style={styles.frameBusqueda}
        placeholder="Búsqueda..."
        keyboardType="default"
        placeholderTextColor="#9e9e9e"
      />
      <ScrollView
        style={styles.tarjetaParent}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Pressable
          style={styles.tarjeta}
          onPress={() => navigation.navigate("ProductDataPageAPTO")}
        >
          <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
          <Image
            style={[styles.image5Icon, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text style={[styles.milanesaDeSoja, styles.timeClr]}>
            MILANESA DE SOJA - VEGETALÉX
          </Text>
        </Pressable>
        <Pressable
          style={styles.tarjetaShadowBox}
          onPress={() => navigation.navigate("Nutriscore")}
        >
          <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
          <Image
            style={[styles.image5Icon, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text style={[styles.milanesaDeSoja, styles.timeClr]}>
            MILANESA DE SOJA - GRANJA DEL SOL
          </Text>
        </Pressable>
        <Pressable
          style={styles.tarjetaShadowBox}
          onPress={() => navigation.navigate("ProductDataPageNOAPTO")}
        >
          <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
          <Image
            style={[styles.image5Icon, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text style={[styles.milanesaDeSoja, styles.timeClr]}>
            MILANESA DE SOJA - LUCHETTI
          </Text>
        </Pressable>
        <View style={styles.tarjetaShadowBox}>
          <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
          <Image
            style={[styles.image5Icon, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text style={[styles.milanesaDeSoja, styles.timeClr]}>
            MILANESA DE SOJA - SWIFT
          </Text>
        </View>
        <View style={styles.tarjetaShadowBox}>
          <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
          <Image
            style={[styles.image5Icon, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text style={[styles.milanesaDeSoja, styles.timeClr]}>
            MILANESA DE SOJA - DÍA
          </Text>
        </View>
      </ScrollView>
      <Image
        style={styles.productSearchPageChild}
        contentFit="cover"
        source={require("../assets/frame-18.png")}
      />
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
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
  },
  capIconPosition: {
    right: 0,
    position: "absolute",
  },
  timeClr: {
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  image5IconLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  logoIcon: {
    top: 241,
    left: 73,
    width: 244,
    height: 221,
    display: "none",
    position: "absolute",
  },
  eresAdministrador: {
    top: 801,
    left: 240,
    fontFamily: FontFamily.niramitRegular,
    color: Color.antiquewhite,
    textAlign: "center",
    fontSize: FontSize.size_xs,
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
  frameBusqueda: {
    top: 163,
    left: 64,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.white,
    width: 262,
    flexDirection: "row",
    padding: Padding.p_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.niramitSemibold,
    fontSize: FontSize.size_xs,
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
    overflow: "hidden",
    maxHeight: "100%",
  },
  milanesaDeSoja: {
    width: "64.26%",
    top: "32.81%",
    left: "35.74%",
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.niramitBold,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tarjeta: {
    height: 128,
    width: 333,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  tarjetaShadowBox: {
    marginTop: 20,
    height: 128,
    width: 333,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  tarjetaParent: {
    top: 228,
    left: 28,
    position: "absolute",
    flex: 1,
  },
  productSearchPageChild: {
    top: 73,
    left: 164,
    width: 62,
    height: 60,
    position: "absolute",
  },
  iconLayout: {
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
  productSearchPage: {
    backgroundColor: Color.antiquewhite,
    height: 1038,
    width: "100%",
    flex: 1,
  },
});

export default ProductSearchPage;
