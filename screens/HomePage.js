import * as React from "react";
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <TouchableOpacity
        style={styles.wrapper}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("ScanPage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-13.png")}
        />
      </TouchableOpacity>
      <View style={styles.sistemaBarraArriba}>
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        <View style={styles.battery}>
          <View style={styles.capacity} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
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
        style={styles.container}
        onPress={() => navigation.navigate("ProductSearchPage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
      </Pressable>
      <Text style={[styles.chequeTusProductos, styles.timeFlexBox]}>
        ¡Chequeá tus productos, antes de llevarlos!
      </Text>
      <Image
        style={styles.homePageChild}
        contentFit="cover"
        source={require("../assets/group-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    color: Color.black,
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
  wrapper: {
    left: 96,
    top: 316,
    width: 209,
    height: 210,
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
  capacity: {
    borderRadius: 1,
    backgroundColor: Color.black,
    width: 18,
    height: 7,
  },
  capIcon: {
    width: 1,
    height: 4,
    opacity: 0.4,
    marginLeft: 3,
  },
  battery: {
    marginTop: -4.67,
    right: 17,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 1,
    width: 22,
    flexDirection: "row",
    paddingRight: 4,
    paddingBottom: 2,
    alignItems: "center",
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
    right: 0,
    left: 0,
    height: 40,
    position: "absolute",
  },
  container: {
    left: 131,
    top: 568,
    width: 138,
    height: 138,
    position: "absolute",
  },
  chequeTusProductos: {
    top: 244,
    left: 30,
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.niramitSemibold,
  },
  homePageChild: {
    top: 107,
    left: 141,
    width: 108,
    height: 110,
    position: "absolute",
  },
  homePage: {
    backgroundColor: Color.antiquewhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage;
