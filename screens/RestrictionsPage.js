import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Switch,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const RestrictionsPage = () => {
  const [seleccinPositivaValue, setSeleccinPositivaValue] = useState(false);
  const [seleccinNegativaValue, setSeleccinNegativaValue] = useState(false);
  const [seleccinNegativa1Value, setSeleccinNegativa1Value] = useState(false);
  const [seleccinNegativa2Value, setSeleccinNegativa2Value] = useState(false);
  const [seleccinNegativa3Value, setSeleccinNegativa3Value] = useState(false);
  const [seleccinNegativa4Value, setSeleccinNegativa4Value] = useState(false);
  const [seleccinNegativa5Value, setSeleccinNegativa5Value] = useState(false);

  return (
    <View style={styles.restrictionsPage}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <Text style={styles.eresAdministrador}>¿Eres administrador?</Text>
      <Text style={[styles.misRestricciones, styles.timeClr]}>{`Mis
Restricciones`}</Text>
      <Text style={[styles.hipertensin, styles.diabetesTypo]}>
        Hipertensión
      </Text>
      <Switch
        style={[styles.seleccinPositiva, styles.seleccinLayout]}
        value={seleccinPositivaValue}
        onValueChange={setSeleccinPositivaValue}
        thumbColor="#f17f16"
        trackColor={{ false: "#939393", true: "#ffd8b4" }}
      />
      <Switch
        style={[styles.seleccinNegativa, styles.seleccinLayout]}
        value={seleccinNegativaValue}
        onValueChange={setSeleccinNegativaValue}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Switch
        style={[styles.seleccinNegativa1, styles.seleccinLayout]}
        value={seleccinNegativa1Value}
        onValueChange={setSeleccinNegativa1Value}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Switch
        style={[styles.seleccinNegativa2, styles.veganismoPosition]}
        value={seleccinNegativa2Value}
        onValueChange={setSeleccinNegativa2Value}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Switch
        style={[styles.seleccinNegativa3, styles.seleccinLayout]}
        value={seleccinNegativa3Value}
        onValueChange={setSeleccinNegativa3Value}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Switch
        style={[styles.seleccinNegativa4, styles.intoleranciaALaPosition]}
        value={seleccinNegativa4Value}
        onValueChange={setSeleccinNegativa4Value}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Text style={[styles.dietaBajaEn, styles.dietaBajaEnTypo]}>
        Dieta baja en colesterol
      </Text>
      <Text style={[styles.celiaquismo, styles.dietaBajaEnTypo]}>
        Celiaquismo
      </Text>
      <Switch
        style={[styles.seleccinNegativa5, styles.diabetesPosition]}
        value={seleccinNegativa5Value}
        onValueChange={setSeleccinNegativa5Value}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Text style={[styles.diabetes, styles.diabetesPosition]}>Diabetes</Text>
      <Text style={[styles.veganismo, styles.veganismoPosition]}>
        Veganismo
      </Text>
      <Text style={[styles.vegetarianismo, styles.vegetarianismoPosition]}>
        Vegetarianismo
      </Text>
      <Text style={[styles.intoleranciaALa, styles.intoleranciaALaPosition]}>
        Intolerancia a la lactosa
      </Text>
      <Text
        style={[styles.restriccionesFrecuentes, styles.ingredientesAEvitarTypo]}
      >
        Restricciones frecuentes
      </Text>
      <Text
        style={[styles.ingredientesAEvitar, styles.ingredientesAEvitarTypo]}
      >
        Ingredientes a evitar
      </Text>
      <TextInput
        style={[styles.restrictionsPageChild, styles.restrictionsPageChildTypo]}
        placeholder="Buscar ingrediente"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
      />
      <View
        style={[
          styles.tartrazinaColoranteAmarilloWrapper,
          styles.wrapperPosition,
        ]}
      >
        <Text
          style={[
            styles.tartrazinaColoranteAmarillo,
            styles.restrictionsPageChildTypo,
          ]}
        >
          Tartrazina (colorante amarillo)
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.sorbitolWrapper, styles.wrapperPosition]}>
        <Text
          style={[
            styles.tartrazinaColoranteAmarillo,
            styles.restrictionsPageChildTypo,
          ]}
        >
          Sorbitol
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.sistemaBarraArriba}>
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        <View style={styles.battery}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={[styles.capIcon, styles.timePosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.timePosition]} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  timeClr: {
    color: Color.black,
    textAlign: "center",
  },
  diabetesTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  seleccinLayout: {
    height: 20,
    width: 40,
  },
  veganismoPosition: {
    top: 453,
    position: "absolute",
  },
  intoleranciaALaPosition: {
    top: 409,
    position: "absolute",
  },
  dietaBajaEnTypo: {
    left: 88,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.black,
    position: "absolute",
  },
  diabetesPosition: {
    top: 277,
    position: "absolute",
  },
  vegetarianismoPosition: {
    top: 497,
    position: "absolute",
  },
  ingredientesAEvitarTypo: {
    fontFamily: FontFamily.interExtrabold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    left: 31,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  restrictionsPageChildTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  wrapperPosition: {
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_33xl,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_3xs,
    backgroundColor: Color.sandybrown,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    height: 42,
    width: 328,
    left: 31,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 16,
    width: 16,
    left: 326,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iconPosition: {
    top: "12.5%",
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
    top: 797,
    left: 240,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.niramitRegular,
    color: Color.antiquewhite,
    textAlign: "center",
    position: "absolute",
  },
  misRestricciones: {
    top: 76,
    left: 84,
    fontSize: FontSize.size_13xl,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    position: "absolute",
  },
  hipertensin: {
    top: 366,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: 87,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  seleccinPositiva: {
    left: 31,
    height: 20,
    width: 40,
    top: 497,
    position: "absolute",
  },
  seleccinNegativa: {
    left: 32,
    top: 233,
    position: "absolute",
  },
  seleccinNegativa1: {
    top: 365,
    left: 31,
    height: 20,
    width: 40,
    position: "absolute",
  },
  seleccinNegativa2: {
    height: 20,
    width: 40,
    left: 31,
  },
  seleccinNegativa3: {
    top: 321,
    left: 31,
    height: 20,
    width: 40,
    position: "absolute",
  },
  seleccinNegativa4: {
    height: 20,
    width: 40,
    left: 31,
  },
  dietaBajaEn: {
    top: 321,
  },
  celiaquismo: {
    top: 233,
  },
  seleccinNegativa5: {
    height: 20,
    width: 40,
    left: 31,
  },
  diabetes: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: 87,
  },
  veganismo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: 87,
  },
  vegetarianismo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: 87,
  },
  intoleranciaALa: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: 87,
  },
  restriccionesFrecuentes: {
    top: 190,
  },
  ingredientesAEvitar: {
    top: 543,
  },
  restrictionsPageChild: {
    top: 583,
    fontSize: FontSize.size_lg,
    height: 42,
    width: 328,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 31,
    position: "absolute",
  },
  tartrazinaColoranteAmarillo: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    width: 255,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  tartrazinaColoranteAmarilloWrapper: {
    top: 649,
  },
  vectorIcon: {
    top: 662,
  },
  sorbitolWrapper: {
    top: 710,
  },
  vectorIcon1: {
    top: 723,
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
    top: 15,
    left: 351,
    width: 24,
    height: 11,
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
    right: 0,
    position: "absolute",
    backgroundColor: Color.antiquewhite,
  },
  restrictionsPage: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.antiquewhite,
  },
});

export default RestrictionsPage;
