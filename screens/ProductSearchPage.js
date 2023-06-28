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
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProductSearchPage = () => {
  const navigation = useNavigation();

  const [code, setCode] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [img, setImg] = useState('');
  const [nombre, setNombre] = useState('');
  const [productos, setProductos] = useState([]);

  const [codigo, setCodigo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [textBusqueda, setTextBusqueda] = useState('')
  const [inputValue, setInputValue] = useState('');

  const agregarAlHistorial = async (p) => {
    try {
      // Obtén el historial actual almacenado en AsyncStorage
      const historialActual = await AsyncStorage.getItem('productosHistorial');
      const historialArray = JSON.parse(historialActual) || [];
  
      // Agrega el producto al historial
      historialArray.push(p);

      console.log(historialArray)
  
      // Actualiza el historial en AsyncStorage
      await AsyncStorage.setItem('productosHistorial', JSON.stringify(historialArray));
    } catch (error) {
      console.log('Error al agregar al historial:', error);
    }
  };

  const handleHistorial = (p) => {
    agregarAlHistorial(p);
  };

  const handleBlur = () => {
    setTextBusqueda('Buscando...');
    setProductos(null);
    handleInputChange(inputValue);
  };

  const handleInputChange = (text) => {
    const apiUrl = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${text}&search_simple=1&json=1`;

    axios.get(apiUrl)
    .then(response => {
      // Procesar la respuesta de la API
      const data = response.data;
      if (data.count != 0){
        //setNombre(data.product.product_name + " - " + data.product.brands);
        //setImgUrl(data.product.image_url);

        const listaFiltrada = data.products.filter((producto) => producto.countries != undefined && (producto.countries.includes("argentina") || producto.countries.includes("Argentina") || producto.countries.includes("Argentine") || producto.countries.includes("argentine")));
        if (listaFiltrada.length != 0){
          setIsLoading(true);
          setProductos(listaFiltrada);
        } else{
          setIsLoading(false);
          setTextBusqueda('No se encontraron coincidencias.');
        }
      } else {
        setIsLoading(false);
        setTextBusqueda('No se encontraron coincidencias.');
      }
    })
    .catch(error => {
      // Manejar el error de la solicitud
      console.error(error);
    });
  };

  const handlePress = (index) => {
    const prod = productos[index];
    
    const dataParaApto = {
      nombre : prod.product_name,
      imgUrl : prod.image_url,
      nr : prod.nutriscore_grade,
      nutrient_levels: prod.nutrient_levels
    };

    handleHistorial(dataParaApto);

    navigation.navigate("Nutriscore", {dataParaApto});
  };

  return (
    <View style={styles.productSearchPage}>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <TextInput
        style={styles.frameBusqueda}
        placeholder="Búsqueda..."
        keyboardType="default"
        placeholderTextColor="#9e9e9e"
        onChangeText={setInputValue}
        onBlur={handleBlur}
      />
      <View style={{ top: 230, left: 30, height: 540, overflow: 'scroll' }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 0 }}>

        {isLoading && productos != null ? (

            productos.map((producto, index) =>

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

        ) : <Text style={{left: 55}}>
        {textBusqueda}
      </Text>}
        
      </ScrollView>
      </View>
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
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  frameScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 125,
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
