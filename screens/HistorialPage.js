import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const HistorialPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.historialPage}>
      <StatusBar style={styles.wrapperPosition} barStyle="default" />
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
          <Text style={styles.milanesaDeSoja}>
            MILANESA DE SOJA - VEGETALÉX
          </Text>
        </Pressable>
        <View style={styles.tarjetaShadowBox}>
          <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
          <Image
            style={[styles.image5Icon, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text style={styles.milanesaDeSoja}>
            MILANESA DE SOJA - GRANJA DEL SOL
          </Text>
        </View>
        <View style={styles.tarjetaShadowBox}>
          <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
          <Image
            style={[styles.image5Icon, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text style={styles.milanesaDeSoja}>MILANESA DE SOJA - LUCHETTI</Text>
        </View>
        <View style={styles.tarjetaShadowBox}>
          <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
          <Image
            style={[styles.image5Icon, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text style={styles.milanesaDeSoja}>MILANESA DE SOJA - SWIFT</Text>
        </View>
        <View style={styles.tarjetaShadowBox}>
          <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
          <Image
            style={[styles.image5Icon, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Text style={styles.milanesaDeSoja}>MILANESA DE SOJA - DÍA</Text>
        </View>
      </ScrollView>
      <Image
        style={styles.historialPageChild}
        contentFit="cover"
        source={require("../assets/frame-14.png")}
      />
      <View style={styles.historialPageInner}>
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
  },
  wrapperPosition: {
    top: 0,
    position: "absolute",
  },
  image5IconLayout: {
    borderRadius: Border.br_5xs,
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
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  tarjeta: {
    height: 128,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 333,
  },
  tarjetaShadowBox: {
    marginTop: 20,
    height: 128,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 333,
  },
  tarjetaParent: {
    top: 198,
    left: 30,
    maxWidth: 333,
    width: 333,
    position: "absolute",
    flex: 1,
  },
  historialPageChild: {
    top: 72,
    left: 145,
    width: 100,
    height: 85,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: -4,
    width: 68,
    height: 68,
  },
  historialPageInner: {
    top: 62,
    left: 21,
    width: 60,
    height: 60,
    position: "absolute",
  },
  historialPage: {
    backgroundColor: Color.antiquewhite,
    height: 844,
    width: "100%",
    flex: 1,
  },
});

export default HistorialPage;
