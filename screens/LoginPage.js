import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, StatusBar, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <StatusBar barStyle="default" />
      <Text style={[styles.checkIt, styles.checkItFlexBox]}>CHECK IT</Text>
      <Image
        style={styles.loginPageChild}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Pressable
        style={styles.botonGrande}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
        }
      >
        <Text style={styles.a}>INICIAR SESIÓN</Text>
      </Pressable>
      <Text style={[styles.inicioDeSesin, styles.checkItFlexBox]}>
        Inicio de sesión
      </Text>
      <Text style={[styles.olvidMiContrasea, styles.textTypo]}>
        Olvidé mi contraseña
      </Text>
      <Pressable
        style={styles.noTienesUnaContainer}
        onPress={() => navigation.navigate("Registrarse")}
      >
        <Text style={styles.textTypo}>
          <Text style={styles.noTienesUna}>{`¿No tienes una cuenta? `}</Text>
          <Text style={styles.registrarse}>Registrarse</Text>
        </Text>
      </Pressable>
      <View style={[styles.iconEnvelopeAltParent, styles.iconParentLayout]}>
        <Image
          style={styles.iconEnvelopeAlt}
          contentFit="cover"
          source={require("../assets/-icon-envelopealt.png")}
        />
        <Text style={[styles.correoElectrnico, styles.contraseaTypo]}>
          Correo electrónico
        </Text>
      </View>
      <View style={[styles.iconPadlockParent, styles.iconParentLayout]}>
        <Image
          style={styles.iconPadlock}
          contentFit="cover"
          source={require("../assets/-icon-padlock.png")}
        />
        <Text style={[styles.contrasea, styles.contraseaTypo]}>Contraseña</Text>
      </View>
      <Image
        style={styles.iconEyeSlash}
        contentFit="cover"
        source={require("../assets/-icon-eye-slash.png")}
      />
      <Text style={styles.c}>C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkItFlexBox: {
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  iconParentLayout: {
    flexDirection: "row",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    height: 42,
    width: 328,
    left: 31,
    position: "absolute",
  },
  contraseaTypo: {
    color: Color.gray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  logoIcon: {
    top: 241,
    left: 73,
    width: 244,
    height: 221,
    display: "none",
    position: "absolute",
  },
  checkIt: {
    top: 272,
    left: 80,
    fontSize: FontSize.size_29xl,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "center",
  },
  loginPageChild: {
    top: 111,
    left: 119,
    width: 153,
    height: 153,
    position: "absolute",
  },
  a: {
    justifyContent: "center",
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    flex: 1,
  },
  botonGrande: {
    top: 577,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkorange,
    padding: Padding.p_3xs,
    height: 42,
    width: 328,
    left: 31,
    position: "absolute",
  },
  inicioDeSesin: {
    top: 362,
    left: 96,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: FontFamily.niramitSemibold,
  },
  olvidMiContrasea: {
    top: 634,
    left: 104,
    color: Color.black,
    position: "absolute",
  },
  noTienesUna: {
    color: Color.black,
  },
  registrarse: {
    color: Color.darkorange,
  },
  noTienesUnaContainer: {
    left: 43,
    top: 760,
    position: "absolute",
  },
  iconEnvelopeAlt: {
    width: 23,
    height: 18,
  },
  correoElectrnico: {
    width: 160,
    marginLeft: 10,
    height: 18,
  },
  iconEnvelopeAltParent: {
    top: 429,
    padding: Padding.p_3xs,
  },
  iconPadlock: {
    width: 17,
    height: 21,
  },
  contrasea: {
    width: 100,
    marginLeft: 8,
    alignSelf: "stretch",
    color: Color.gray_300,
  },
  iconPadlockParent: {
    top: 487,
    paddingLeft: Padding.p_sm,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
  },
  iconEyeSlash: {
    height: "2.84%",
    width: "6.15%",
    top: "58.77%",
    right: "12.05%",
    bottom: "38.39%",
    left: "81.79%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  c: {
    top: 133,
    left: 171,
    fontSize: FontSize.size_91xl,
    fontFamily: FontFamily.londrinaShadowRegular,
    textAlign: "left",
    width: 49,
    height: 110,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  loginPage: {
    backgroundColor: Color.antiquewhite,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default LoginPage;
