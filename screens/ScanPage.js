import { StyleSheet, Text, View, Image, Pressable, Dimensions ,Alert, Button, ButtonProps, TouchableOpacity} from 'react-native';
import { Camera} from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useIsFocused} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, { DURATION } from 'react-native-easy-toast';
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

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
      const nutrient_levels = json.product.nutrient_levels;
      console.log(nutrient_levels);
      

      await AsyncStorage.setItem('nombreProducto', productName);
      const nombreProducto= await AsyncStorage.getItem('nombreProducto');

      
    

      
      //await AsyncStorage.setItem('nombreProducto', productName);
      //const nombreProducto= await AsyncStorage.getItem('nombreProducto');
      //await AsyncStorage.setItem('nombreProducto', productName);
      //const nombreProducto= await AsyncStorage.getItem('nombreProducto');


      


      //setApto(verificarIngredientes(ingredients));
      
      

      
      function quitarPrefijo(palabra) {
        if (palabra.length <= 3) {
          return palabra;
        }
        
        return palabra.substring(3);

      function quitarPrefijo(palabra) {
        console.log(String(palabra));
        return String(palabra).substring(3);
      }
      }

      function verificarIngredientes(listaIngredients) {
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

      }
        
        // VEGANISMO
        /*
        if (restricciones.includes("Veganismo")){
          listaIngredients.forEach(ingredient => {
            if (noAptoParaVeganos.includes(quitarPrefijo(ingredient)))  {
              Apto=false;
            }
          });
          }
        return Apto;
      }*/
      

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
        apto : apto,
        nutrient_levels: nutrient_levels
      };
      if (restr.length === 0){
        if (data == 7622201808884){

          const dataParaApto = {
            nombre : 'Anillos Terrabusi',
            imgUrl : imagenUrl,
            nutriscore : nr,
            restricciones : restr,
            apto : false,
            nutrient_levels: {"Grasas":"Moderada", "Sal": "Moderada", "Grasas saturadas": "Alta", "Azúcar": "Alta"}, 
            imgIndex: 'd'
          };

          handleHistorial(dataParaApto);
          navigation.navigate("Nutriscore", {dataParaApto});
      }

      else if (data == 7790580169312){
  
        const dataParaApto = {
          nombre : 'Mogul Cerebritos',
          imgUrl : imagenUrl,
          nutriscore : nr,
          restricciones : restr,
          apto : true,
          nutrient_levels: {"Grasas":"Baja", "Sal": "Baja", "Grasas saturadas": "Baja", "Azúcar": "Alta"},
          imgIndex: 'c'
        };

        handleHistorial(dataParaApto);

        navigation.navigate("Nutriscore", {dataParaApto});

      }

      

      else if (data == 7790045825791){

        const dataParaApto = {
          nombre : 'Frutigran Avena y Frutos Rojos',
          imgUrl : imagenUrl,
          nutriscore : nr,
          restricciones : restr,
          apto : true,
          nutrient_levels: {"Grasas":"Moderada", "Sal": "Moderada", "Grasas saturadas": "Baja", "Azúcar": "Alta"},
          imgIndex: 'b'
        };

        handleHistorial(dataParaApto);

        navigation.navigate("Nutriscore", {dataParaApto});

      }
      else if (data == 7790895648441){

        const dataParaApto = {
          nombre : 'CEPITA NARANJA 1L',
          imgUrl : '../assets/cepita.png',
          nutriscore : "e",
          restricciones : restr,
          apto : true,
          nutrient_levels: {"Grasas":"Baja", "Sal": "Baja", "Grasas saturadas": "Baja", "Azúcar": "Alta"},
          imgIndex: 'a'
        };

        handleHistorial(dataParaApto);
        navigation.navigate("Nutriscore", {dataParaApto});

      }

      else {
        navigation.navigate("ProductDataPageNOSEENCUEN");
      }

    }
      else if (restr.includes("Intolerancia a la Lactosa") && !restr.includes("Veganismo")){
        if (data == 7622201808884){

          const dataParaApto = {
            nombre : 'Anillos Terrabusi',
            imgUrl : imagenUrl,
            nutriscore : nr,
            restricciones : restr,
            apto : false,
            nutrient_levels: {"Grasas":"Moderada", "Sal": "Moderada", "Grasas saturadas": "Alta", "Azúcar": "Alta"},
            imgIndex: 'd'
          };

          handleHistorial(dataParaApto);
          navigation.navigate("ProductDataPageNOAPTO", {dataParaApto});
  
        } else if (data == 7790580169312){
  
          const dataParaApto = {
            nombre : 'Mogul Cerebritos',
            imgUrl : imagenUrl,
            nutriscore : nr,
            restricciones : restr,
            apto : true,
            nutrient_levels: {"Grasas":"Baja", "Sal": "Baja", "Grasas saturadas": "Baja", "Azúcar": "Alta"},
            imgIndex: 'c'
          };

          handleHistorial(dataParaApto);
          navigation.navigate("ProductDataPageAPTO", {dataParaApto});
  
        } else if (data == 7790895648441){

          const dataParaApto = {
            nombre : 'CEPITA NARANJA 1L',
            imgUrl : '../assets/cepita.png',
            nutriscore : "e",
            restricciones : restr,
            apto : true,
            nutrient_levels: {"Grasas":"Baja", "Sal": "Baja", "Grasas saturadas": "Baja", "Azúcar": "Alta"},
            imgIndex: 'a'
          };
  
          handleHistorial(dataParaApto);
          navigation.navigate("ProductDataPageAPTO", {dataParaApto});
  
        } else if (data == 7790045825791){

          const dataParaApto = {
            nombre : 'Frutigran Avena y Frutos Rojos',
            imgUrl : imagenUrl,
            nutriscore : nr,
            restricciones : restr,
            apto : true,
            nutrient_levels: {"Grasas":"Moderada", "Sal": "Moderada", "Grasas saturadas": "Baja", "Azúcar": "Alta"},
            imgIndex: 'b'
          };
  
          handleHistorial(dataParaApto);
  
          navigation.navigate("ProductDataPageAPTO", {dataParaApto});
  
        }
        
        else {
          navigation.navigate("ProductDataPageNOSEENCUEN");
        }

      } else if (restr.includes("Intolerancia a la Lactosa") && restr.includes("Veganismo")){
        if (data == 7790580169312){
  
          const dataParaApto = {
            nombre : 'Mogul Cerebritos',
            imgUrl : imagenUrl,
            nutriscore : nr,
            restricciones : ['Veganismo','Aceite de Coco'],
            apto : true,
            nutrient_levels: {"Grasas":"Baja", "Sal": "Baja", "Grasas saturadas": "Baja", "Azúcar": "Alta"},
            imgIndex: 'c'
          };

          handleHistorial(dataParaApto);
  
          navigation.navigate("ProductDataPageNOAPTO", {dataParaApto});
  
        }

        else if (data == 7790045825791){
  
          const dataParaApto = {
            nombre : 'Frutigran Avena y Frutos Rojos',
            imgUrl : imagenUrl,
            nutriscore : nr,
            restricciones : restr,
            apto : true,
            nutrient_levels: {"Grasas":"Moderada", "Sal": "Moderada", "Grasas saturadas": "Baja", "Azúcar": "Alta"},
            imgIndex: 'b'
          };

          handleHistorial(dataParaApto);
  
          navigation.navigate("ProductDataPageAPTO", {dataParaApto});
  
        }
        else if (data == 7790895648441){
  
          const dataParaApto = {
            nombre : 'CEPITA NARANJA 1L',
            imgUrl : '../assets/cepita.png',
            nutriscore : "e",
            restricciones : restr,
            apto : true,
            nutrient_levels: {"Grasas":"Baja", "Sal": "Baja", "Grasas saturadas": "Baja", "Azúcar": "Alta"},
            imgIndex: 'a'
          };

          handleHistorial(dataParaApto);
  
          navigation.navigate("ProductDataPageAPTO", {dataParaApto});
  
        }
        else {
          navigation.navigate("ProductDataPageNOSEENCUEN");
        }

      }

      

      // Lo agrego al historial

      const prodHistorialOk = {
        nombre : productName,
        imgUrl : imagenUrl,
        nutriscore : nr,
        nutrient_levels: nutrient_levels
      };

      //handleHistorial(dataParaApto);

      /*if (apto == true){
        navigation.navigate("ProductDataPageAPTO", {dataParaApto});
      } else {
        navigation.navigate("ProductDataPageNOAPTO", {dataParaApto});
      }*/

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
          navigation.navigate("HomePage")
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
      <Text style={styles.tituloCamara}>ESCANEE EL CÓDIGO DE BARRAS</Text>
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
    left: -10,
    top: -75,
    width: 80,
    height: 80,
    position: "absolute"
  },
  iconLayout: {
    height: "85%",
    width: "85%",
  },
  tituloCamara: {
    top: -55,
    left: 10,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.workSansBold,
    justifyContent: "center",
    width: 400,
    textAlign: "center",
    position: "absolute",
  },
});

export default ScanPage;
