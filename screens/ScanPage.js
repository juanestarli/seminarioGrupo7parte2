import { StyleSheet, Text, View, Image, Pressable, Dimensions ,Alert, Button, ButtonProps, TouchableOpacity} from 'react-native';
import { Camera} from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useIsFocused} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, { DURATION } from 'react-native-easy-toast';


const ScanPage = () => {
  const navigation = useNavigation();

  const toastRef = useRef(null);
  
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
  const [apto, setApto] = useState(true);

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

  const agregarAlHistorial = async (producto) => {
    try {
      // Obtén el historial actual almacenado en AsyncStorage
      const historialActual = await AsyncStorage.getItem('productosHistorial');
      console.log(historialActual)
  
      // Agrega el producto al historial
      historialActual.push(producto);
  
      console.log(historialActual)
      // Actualiza el historial en AsyncStorage
      await AsyncStorage.setItem('productosHistorial', JSON.stringify(historialActual));
    } catch (error) {
      console.log('Error al agregar al historial:', error);
    }
  };

  const handleHistorial = (prodHistorial) => {
    agregarAlHistorial(prodHistorial);
  };

  const handleBarCodeScanned = ({type, data}) => {
    this.camera.pausePreview();
    toastRef.current.show('Procesando código...', DURATION.LENGTH_LONG);
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
      const restr = restricciones;
      const ingredients = json.ingredients_tags;
      console.log(ingredients);
      await AsyncStorage.setItem('nombreProducto', productName);
      const nombreProducto= await AsyncStorage.getItem('nombreProducto');

      setApto(verificarIngredientes(ingredients));
      
      
      
      function quitarPrefijo(palabra) {
        if (palabra.length <= 3) {
          return palabra;
        }
        
        return palabra.substring(3);
      }

      function verificarIngredientes(ingredientes) {
        let Apto=true;
        const noAptoParaVeganos = [
          'carmín/cochinilla (E120)',
          'carmine/cochineal (E120)',
          'caseína',
          'casein',
          'lactosa',
          'lactose',
          'suero de leche',
          'whey',
          'colágeno',
          'collagen',
          'elastina',
          'elastin',
          'queratina',
          'keratin',
          'gelatina',
          'gelatin',
          'gelatina áspic',
          'aspic gelatin',
          'lardo/sebo',
          'lard/tallow',
          'shellac/goma laca',
          'shellac',
          'cera de abeja (E901)',
          'beeswax (E901)',
          'propóleo',
          'propolis',
          'jalea real',
          'royal jelly',
          'vitamina D3',
          'vitamin D3',
          'lanolina (E913)',
          'lanolin (E913)',
          'albúmina/clara de huevo',
          'egg albumin/egg white',
          'cola de pescado',
          'fish glue',
          'aceite de hígado de bacalao',
          'cod liver oil',
          'pepsina',
          'pepsin',
          'leche',
          'milk',
          'huevo',
          'egg',
          'pollo',
          'chicken',
          'carne',
          'meat',
          'pescado',
          'fish',
          'queso',
          'cheese'
        ];
        
        // VEGANISMO

        if (restricciones.includes("Veganismo")){
            for (let i = 0; i < ingredients.length; i++) {
              if (noAptoParaVeganos.includes(quitarPrefijo(ingredients[i])))  {
                Apto=false;
                break;
              }
            }
            restr.push('Veganismo');
          }
        return Apto;
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
        restricciones : restr,
        apto : apto
      };

      // Lo agrego al historial

      const prodHistorial = {
        nombre : productName,
        imgUrl : imagenUrl,
        nutriscore : nr
      };

      console.log(prodHistorial)
      // arreglar lo de agregar, lo saque pq tiraba error

      if (apto == true){
        navigation.navigate("ProductDataPageAPTO", {dataParaApto});
      } else {
        navigation.navigate("ProductDataPageNOAPTO", {dataParaApto});
      }

    }
  }

  

  //useIsFocused returns a boolean indicating whether the screen is focused or not
  const viewFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {viewFocused &&
      <Camera 
        ref={(ref) => { this.camera = ref; }}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        style={styles.cam}
      />
      }
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
      <Toast
        ref={toastRef}
        style={{ backgroundColor: 'gray', position: 'absolute', top: 100 }}
        position="top"
      />
   </View>
   
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'center',
    width:Dimensions.get('screen').width-15,
    height:Dimensions.get('screen').height,
    flexDirection:'column-reverse',
    marginTop:80,
    marginBottom:20,
    borderWidth:5,
    borderColor:"grey"
  },
  cam: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  wrapper: {
    left: -15,
    top: -22,
    width: 80,
    height: 80,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
});

export default ScanPage;
