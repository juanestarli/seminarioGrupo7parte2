import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const Registrarse = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registrarse}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
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
      <Pressable
        style={styles.botonGrande}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
        }
      >
        <Text style={styles.a}>Registrarse</Text>
      </Pressable>
      <View style={[styles.iconEnvelopeAltParent, styles.iconParentLayout]}>
        <Image
          style={styles.iconEnvelopeAlt}
          contentFit="cover"
          source={require("../assets/-icon-envelopealt.png")}
        />
        <Text style={[styles.ingreseSuCorreo, styles.ingreseTypo]}>
          Ingrese su correo electrónico
        </Text>
      </View>
      <View style={[styles.iconPadlockParent, styles.iconPosition]}>
        <Image
          style={styles.iconPadlock}
          contentFit="cover"
          source={require("../assets/-icon-padlock.png")}
        />
        <Text style={[styles.ingreseSuContrasea, styles.ingreseTypo]}>
          Ingrese su contraseña
        </Text>
      </View>
      <View style={[styles.iconUserParent, styles.iconParentLayout]}>
        <Image
          style={styles.iconUser}
          contentFit="cover"
          source={require("../assets/-icon-user2.png")}
        />
        <Text style={[styles.ingreseSuCorreo, styles.ingreseTypo]}>
          Ingrese su nombre
        </Text>
      </View>
      <View style={[styles.iconUserGroup, styles.iconPosition]}>
        <Image
          style={styles.iconUser}
          contentFit="cover"
          source={require("../assets/-icon-user2.png")}
        />
        <Text style={[styles.ingreseSuContrasea, styles.ingreseTypo]}>
          Ingrese su apellido
        </Text>
      </View>
      <Text style={styles.registroDeUsuario}>Registro de usuario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  iconParentLayout: {
    flexDirection: "row",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    padding: Padding.p_3xs,
    height: 42,
    width: 328,
    left: 31,
    position: "absolute",
  },
  ingreseTypo: {
    color: Color.gray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  iconPosition: {
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_sm,
    flexDirection: "row",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
    height: 42,
    width: 328,
    left: 31,
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
  a: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.black,
    flex: 1,
  },
  botonGrande: {
    top: 646,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkorange,
    padding: Padding.p_3xs,
    height: 42,
    width: 328,
    left: 31,
    position: "absolute",
  },
  iconEnvelopeAlt: {
    width: 23,
    height: 18,
  },
  ingreseSuCorreo: {
    width: 272,
    marginLeft: 10,
    height: 18,
  },
  iconEnvelopeAltParent: {
    top: 384,
  },
  iconPadlock: {
    height: 21,
    width: 17,
  },
  ingreseSuContrasea: {
    width: 254,
    marginLeft: 13,
    alignSelf: "stretch",
    color: Color.gray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  iconPadlockParent: {
    top: 442,
  },
  iconUser: {
    width: 19,
    height: 21,
  },
  iconUserParent: {
    top: 268,
  },
  iconUserGroup: {
    top: 326,
  },
  registroDeUsuario: {
    top: 122,
    left: 42,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  registrarse: {
    backgroundColor: Color.antiquewhite,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Registrarse;
