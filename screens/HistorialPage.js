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
import { useState, useEffect, useRef } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HistorialPage = () => {
  const navigation = useNavigation();

  const [productosHistorial, setProductosHistorial] = useState([]);

  useEffect(() => {
    // Ejemplo de cómo recuperar un objeto JSON de AsyncStorage
    const getData = async () => {
      try {
        const jsonString = await AsyncStorage.getItem('productosHistorial');
        const data = JSON.parse(jsonString);
        setProductosHistorial(data);
        console.log('Historial recuperado:', data);
      } catch (error) {
        console.log('Error al recuperar el historial:', error);
      }
    };

    getData();
  }, []);

  return (
    <View style={styles.historialPage}>
      <StatusBar style={styles.wrapperPosition} barStyle="default" />
      <View style={{ top: 230, left: 30, height: 540, overflow: 'scroll' }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 0 }}>

        {productosHistorial != null &&  productosHistorial.length !== 0 ? (

        productosHistorial.map((producto, index) =>

            <Pressable
              key={index}
              style={styles.tarjetaShadowBox}
              onPress={() => handlePress(index)}
            >

            <View style={[styles.tarjetaChild, styles.image5IconLayout]} />
            {producto.image_url ? (
                <Image source={{ uri: producto.image_url }} style={[styles.image5Icon, styles.image5IconLayout]} contentFit="cover" />
              ) : (
                <></>
            )}

            {producto.product_name ? (
                <Text style={[styles.milanesaDeSoja, styles.timeClr]}>
                  {producto.product_name}
                </Text>
              ) : (
                <></>
            )}

            </Pressable>

            )

        ) : <Text style={{left: 65}}>
        No tiene productos en el historial.
      </Text>}
        
      </ScrollView>
      </View>
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
  timeClr: {
    color: Color.black,
    textAlign: "center",
    position: "absolute",
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
    left: 150,
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
