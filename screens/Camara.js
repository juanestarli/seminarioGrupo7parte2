import { StyleSheet, Text, View, Image ,Dimensions ,Alert} from 'react-native';
import { Camera,} from 'expo-camera';

import * as MediaLibrary from 'expo-media-library';
import { useState, useEffect, useRef } from 'react';
import Button from '../botones/botonEscanear'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dimensions } from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ModalSatisfactorio from '../modals/modalSatisfactorio';
import ModalNegativo from '../modals/modalNegativo';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ConfigCamara() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isValueTrue, setIsValueTrue] = useState(false);
  const [modalNegativoVisible, setModalNegativoVisible] = useState(false);
  const navigation = useNavigation();
  
  //Variables lector de barra
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanData, setScanData] = useState(null);
  
  //Variables camara
  const [imagen, setImagen] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back) //Camara trasera
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off) //Desactivamos el flash
  const cameraRef = useRef(null);

  const handleOpenModal = () => {
    
    var condition=true
    Alert.alert(condition)
    //si la condicion es verdadera abrimos el modal apto, sino el no es apto
      if (condition) {
          setModalVisible(true); 
      } else {
          setModalNegativoVisible(true);
      }
  };
  const handleCloseModal = () => {
    setModalVisible(false);
    setModalNegativoVisible(false);
};
const getNameProduct = async (data) => {
  const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
  const json = await response.json();
  const productName=json.product.product_name;
  console.log(productName)
  await AsyncStorage.setItem('nombreProducto', productName);
  const nombreProducto= await AsyncStorage.getItem('nombreProducto');
}

const validarProducto = async (data) => {
  try {
    
    const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`);

    const json = await response.json();
    const productData = json.product; 
    console.log(productData.ingredients);
    const ingredients=productData.ingredients;
    var regimenes = await AsyncStorage.getItem('regimen');
    regimenes = JSON.parse(regimenes);//vegano,vegetariano
    let condicion = true;
    for (var regimen of regimenes) {
      console.log("regimen:");
      console.log(regimen);

          for (const ingredient of ingredients) {
            console.log(ingredient.vegan)
            if (regimen="vegano"){
              if (ingredient.vegan === "no") {
                condicion = false;
              }
              else if (ingredient.vegan === "yes") {
                condicion = true;
              }
            }

            else if (regimen === "vegetariano")
            {
              if (ingredient.vegetarian === "no") {
                condicion = false;
              }
              else if (ingredient.vegetarian === "yes") {
                condicion = true;
              }
            }
          if (condicion === false) {
            break;
          }
        }

    if (condicion === false) {
      setModalNegativoVisible(true);
      break;
    }
    else if (condicion === true) {
      setModalVisible(true);
    }
  }  
    console.log(condicion);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    (async () =>{
      MediaLibrary.requestPermissionsAsync(); //Pedimos permiso para acceder a la libreria
      const cameraStatus = await BarCodeScanner.requestPermissionsAsync(); //Pedimos permiso para acceder a la camara
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  },[])

  if(hasCameraPermission === false){
    return <Text>Sin acceso a la camara</Text>
  }

  const handleBarCodeScanned = ({type, data}) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);
    
    getNameProduct(data);
    //aca primero vemos si es apto o no
    validarProducto(data);
    //navigation.push("BienvenidaConfigInicial")
  }

  //useIsFocused returns a boolean indicating whether the screen is focused or not
  const viewFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {viewFocused &&
      <Camera
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
     
      />}
      {scanData && <Button 
                    icon={'retweet'} 
                    title={'Escanear otra vez'} 
                    onPress={() => setScanData(undefined)}
                    />   
      }
      <ModalSatisfactorio visible={modalVisible} onClose={handleCloseModal} />
      <ModalNegativo visible={modalNegativoVisible} onClose={handleCloseModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignSelf:'center',
    width:Dimensions.get('screen').width-15,
    height:Dimensions.get('screen').height,
    overflow:'hidden',
    flexDirection:'column-reverse',
    borderTopStartRadius:50,
    borderTopEndRadius:50,
    borderBottomStartRadius:30,
    borderBottomEndRadius:30,
    marginTop:80,
    marginBottom:20,
    borderWidth:5,
    borderColor:"grey"

  },
});