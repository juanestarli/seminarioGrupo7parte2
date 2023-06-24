import { StyleSheet, Text, View, Image ,Dimensions ,Alert, Button, ButtonProps, TouchableOpacity} from 'react-native';
import { Camera} from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useIsFocused} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ScanPage = () => {
  const navigation = useNavigation();
  
  //Variables lector de barra
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanData, setScanData] = useState(null);
  
  //Variables camara
  const [imagen, setImagen] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back) //Camara trasera
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off) //Desactivamos el flash
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () =>{
      const cameraStatus = await BarCodeScanner.requestPermissionsAsync(); //Pedimos permiso para acceder a la camara
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  },[])

  if(hasCameraPermission === false){
    return <Text>Sin acceso a la camara</Text>
  }

  const [restricciones, setRestricciones] = useState('');
  const [apto, setApto] = useState('');

  useEffect(() => {
    // Ejemplo de cómo recuperar un objeto JSON de AsyncStorage
    const getData = async () => {
      try {
        const jsonString = await AsyncStorage.getItem('restricciones');
        const data = JSON.parse(jsonString);
        setRestricciones(data);
        console.log('Restricciones recuperadas:', data);
      } catch (error) {
        console.log('Error al recuperar las restricciones:', error);
      }
    };

    getData();
  }, []);

  const handleBarCodeScanned = ({type, data}) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`); 
    getNameProduct(data);
    
  }

  const getNameProduct = async (data) => {
    const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
    const json = await response.json();
    setScanData(null);

    // Chequeo si encontró el producto

    if (json.status == 0){

      navigation.navigate("ProductDataPageNOSEENCUEN");

    } else {

      // Nombre y Imágen
      const productName = json.product.product_name;
      const imagenUrl = json.product.image_url;
      const nr = json.product.nutriscore_grade;
      const restr = [];

      await AsyncStorage.setItem('nombreProducto', productName);
      const nombreProducto= await AsyncStorage.getItem('nombreProducto');

      setApto('true');

      // VEGANISMO

      if (restricciones.veganismo == true){
        if (json.product.traces_lc == "es"){
          setApto('false');
          restr.push('Veganismo');
        }
      }

      // VEGETARIANISMO
      // CELIAQUISMO
      // DIABETES
      // DIETA BAJA EN COLESTEROL
      // HIPERTENSION
      // INTOLERANCIA A LA LACTOSA

      



      // Armo un JSON y lo mando a APTO
      const dataParaApto = {
        nombre : productName,
        imgUrl : imagenUrl,
        nutriscore : nr,
        restricciones : restr
      };

      console.log(apto);
      if (apto == 'true'){
        navigation.navigate("ProductDataPageAPTO", {dataParaApto});
      } else {
        navigation.navigate("ProductDataPageNOAPTO", {dataParaApto});
      }

    }
  }

  const validarProducto = async (data) => {
      const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`);
      const json = await response.json();
      const productData = json.product; 
      console.log(productData.product);
      const ingredients=productData.ingredients;
  }

  ;

  //useIsFocused returns a boolean indicating whether the screen is focused or not
  const viewFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {viewFocused &&
      <Camera
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      }
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
  wrapper: {
    left: 33,
    top: 67,
    width: 68,
    height: 68,
    position: "absolute",
  },
});

export default ScanPage;
