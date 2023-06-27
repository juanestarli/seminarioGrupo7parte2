import React, { useState, useEffect, useRef } from "react";
import { Image } from "expo-image";
import {StyleSheet,Text,  Switch,  TextInput,  View,  Pressable, ScrollView, KeyboardAvoidingView} from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, { DURATION } from 'react-native-easy-toast';

const RestrictionsPage = () => {
  const [celiaquismo, setCeliaquismo] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [bajoColesterol, setBajoColesterol] = useState(false);
  const [hipertension, setHipertension] = useState(false);
  const [intoleranciaLactosa, setIntoleranciaLactosa] = useState(false);
  const [veganismo, setVeganismo] = useState(false);
  const [vegetarianismo, setVegetarianismo] = useState(false);

  const [restricciones, setRestricciones] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [productosIngredientes, setProductosIngredientes] = useState([]);
  const [isDataLoaded2, setIsDataLoaded2] = useState(false);

  const toastRef2 = useRef(null);

  const toastRef = useRef(null);
  const handleSend = () => {
    toastRef.current.show('Restricciones actualizadas.', DURATION.LENGTH_LONG);
  };

  useEffect(() => {
    // Ejemplo de cómo recuperar un objeto JSON de AsyncStorage
    const getData = async () => {
      try {
        const jsonString = await AsyncStorage.getItem('restricciones');
        const data = JSON.parse(jsonString) || [];

        if (data.includes('Celiaquismo')){
          setCeliaquismo(true);
        }
        if (data.includes('Diabetes')){
          setDiabetes(true);
        }
        if (data.includes('Dieta baja en Colesterol')){
          setBajoColesterol(true);
        }
        if (data.includes('Hipertensión')){
          setHipertension(true);
        }
        if (data.includes('Intolerancia a la Lactosa')){
          setIntoleranciaLactosa(true);
        }
        if (data.includes('Veganismo')){
          setVeganismo(true);
        }
        if (data.includes('Vegetarianismo')){
          setVegetarianismo(true);
        }

        setRestricciones(data);
        console.log('Restricciones recuperadas:', data);
        setIsDataLoaded(true);
        
      } catch (error) {
        console.log('Error al recuperar las restricciones:', error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    // Ejemplo de cómo recuperar un objeto JSON de AsyncStorage
    const getData = async () => {
      try {
        const jsonString = await AsyncStorage.getItem('ingredientes');
        const data = JSON.parse(jsonString) || [];

        setProductosIngredientes(data);
        console.log('Ingredientes recuperados:', data);
        setIsDataLoaded2(true);
        
      } catch (error) {
        console.log('Error al recuperar los ingredientes:', error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (isDataLoaded){
      actualizarRestricciones();
    }
  }, [celiaquismo, diabetes, bajoColesterol, hipertension, intoleranciaLactosa, veganismo, vegetarianismo]);

  const actualizarRestricciones = () => {

    const nuevasRestricciones = [];

    if (celiaquismo) nuevasRestricciones.push('Celiaquismo');
    if (diabetes) nuevasRestricciones.push('Diabetes');
    if (bajoColesterol) nuevasRestricciones.push('Dieta baja en Colesterol');
    if (hipertension) nuevasRestricciones.push('Hipertensión');
    if (intoleranciaLactosa) nuevasRestricciones.push('Intolerancia a la Lactosa');
    if (veganismo) nuevasRestricciones.push('Veganismo');
    if (vegetarianismo) nuevasRestricciones.push('Vegetarianismo');

    setRestricciones(nuevasRestricciones);

    console.log('Restricciones actualizadas:', nuevasRestricciones);

    agregarRestriccion(nuevasRestricciones);

  };

  const agregarRestriccion = async (p) => {
    try { 
      // Actualiza las restricciones en AsyncStorage
      await AsyncStorage.setItem('restricciones', JSON.stringify(p));
    } catch (error) {
      console.log('Error al agregar al historial:', error);
    }
  };

  this.myTextInput = React.createRef();

  const agregarIngrediente = async (p) => {
    try { 
      const newArray = [...productosIngredientes, p];
      productosIngredientes.push(p);


      setProductosIngredientes(newArray);
      await AsyncStorage.setItem('ingredientes', JSON.stringify(productosIngredientes));
    } catch (error) {
      console.log('Error al agregar ingrediente:', error);
    }
  };

  function pressEnviar() {
    console.log(inputValue)
    agregarIngrediente(inputValue);
    this.myTextInput.current.clear(); 
    this.myTextInput.current.blur();
    handleSend2();
  }

  
  const handleSend2 = () => {
    toastRef2.current.show('Ingrediente agregado correctamente.', DURATION.LENGTH_LONG);
  };

  const handleSend3 = () => {
    toastRef2.current.show('Ingrediente eliminado correctamente.', DURATION.LENGTH_LONG);
  };

  const handleImagePress = (index) => {
    eliminarIngrediente(index);
    handleSend3();
  };

  const eliminarIngrediente = async (indexToRemove) => {
    try { 
      const newArray = productosIngredientes.filter((_, index) => index !== indexToRemove);

      setProductosIngredientes(newArray);
      await AsyncStorage.setItem('ingredientes', JSON.stringify(newArray));
    } catch (error) {
      console.log('Error al agregar ingrediente:', error);
    }
  };

  const cambiarCeliaquismo = (value) => {
    setCeliaquismo(value);
    handleSend();
  };

  const cambiarDiabetes = (value) => {
    setDiabetes(value);
    handleSend();
  };

  const cambiarBajoColesterol = (value) => {
    setBajoColesterol(value);
    handleSend();
  };

  const cambiarHipertension = (value) => {
    setHipertension(value);
    handleSend();
  };

  const cambiarIntoleranciaLactosa = (value) => {
    setIntoleranciaLactosa(value);
    handleSend();
  };

  const cambiarVeganismo = (value) => {
    setVeganismo(value);
    handleSend();
  };

  const cambiarVegetarianismo = (value) => {
    setVegetarianismo(value);
    handleSend();
  };


  return (
    <View style={styles.restrictionsPage}>
      
      
      <Text style={[styles.misRestricciones, styles.timeClr]}>{`Mis
Restricciones`}</Text>
      <Switch
        style={[styles.seleccinPositiva, styles.seleccinLayout]}
        value={vegetarianismo}
        onValueChange={cambiarVegetarianismo}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Switch
        style={[styles.seleccinNegativa, styles.seleccinLayout]}
        value={celiaquismo}
        onValueChange={cambiarCeliaquismo}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Switch
        style={[styles.seleccinNegativa1, styles.seleccinLayout]}
        value={hipertension}
        onValueChange={cambiarHipertension}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Switch
        style={[styles.seleccinNegativa2, styles.veganismoPosition]}
        value={veganismo}
        onValueChange={cambiarVeganismo}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Switch
        style={[styles.seleccinNegativa3, styles.seleccinLayout]}
        value={bajoColesterol}
        onValueChange={cambiarBajoColesterol}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Switch
        style={[styles.seleccinNegativa4, styles.intoleranciaALaPosition]}
        value={intoleranciaLactosa}
        onValueChange={cambiarIntoleranciaLactosa}
        thumbColor="#693200"
        trackColor={{ false: "#939393", true: "#a78a6f" }}
      />
      <Switch
        style={[styles.seleccinNegativa5, styles.diabetesPosition]}
        value={diabetes}
        onValueChange={cambiarDiabetes}
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
      <Text style={[styles.dietaBajaEn, styles.dietaBajaEnTypo]}>
        Dieta baja en colesterol
      </Text>
      <Text style={[styles.celiaquismo, styles.dietaBajaEnTypo]}>
        Celiaquismo
      </Text>
      <Text style={[styles.hipertensin, styles.diabetesTypo]}>
        Hipertensión
      </Text>
      <Text
        style={[styles.restriccionesFrecuentes, styles.ingredientesAEvitarTypo]}
      >
        Restricciones Frecuentes
      </Text>
      <Text
        style={[styles.ingredientesAEvitar, styles.ingredientesAEvitarTypo]}
      >
        Ingredientes a Evitar
      </Text>
      <TextInput
        ref={this.myTextInput}
        style={[styles.restrictionsPageChild, styles.restrictionsPageChildTypo]}
        placeholder="Ingresar ingrediente"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
        onBlur={() =>  pressEnviar()}
        onChangeText={setInputValue}
        
      />

    <View style={{ top: 600, left: 37, height: 100, overflow: 'scroll', width: 315 }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 0}}>

        {productosIngredientes != null &&  productosIngredientes.length !== 0 ? (
          
          productosIngredientes.map((producto, index) =>
          
          <View key={index} style={{ height: 30, marginBottom: 10, backgroundColor: Color.sandybrown, borderRadius: 10 }}>

          
          <Text
            style={[styles.tartrazinaColoranteAmarillo, styles.restrictionsPageChildTypo]}>
            {producto}
          </Text>

          <Pressable key={index} onPress={() => handleImagePress(index)} style={[styles.vectorIcon1, styles.vectorIconLayout, { position: 'absolute', top: 0, right: 0 }]}>
          <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout, { position: 'absolute', top: 7, right: 8 }]}
              contentFit="cover"
              source={require("../assets/vector.png")}
              
          />
          </Pressable>
          

          </View>

          

            )

        ) : <></>}
        
      </ScrollView>
    </View>

      <Toast
        ref={toastRef}
        style={{ backgroundColor: 'gray', position: 'absolute', top: 30 }}
        position="top"
      />
      <Toast
        ref={toastRef2}
        style={{ backgroundColor: 'gray', position: 'absolute', top: 30 }}
        position="top"
      />
      
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
    top: 410,
    position: "absolute",
  },
  intoleranciaALaPosition: {
    top: 366,
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
    top: 234,
    position: "absolute",
  },
  vegetarianismoPosition: {
    top: 454,
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
    top: 40,
    left: 94,
    fontSize: FontSize.size_13xl,
    fontWeight: '900',
    fontFamily: FontFamily.interBlack,
    
    position: "absolute",
  },
  hipertensin: {
    top: 323,
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
    top: 454,
    position: "absolute",
  },
  seleccinNegativa: {
    left: 32,
    top: 190,
    position: "absolute",
  },
  seleccinNegativa1: {
    top: 323,
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
    top: 278,
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
    top: 278,
  },
  celiaquismo: {
    top: 190,
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
    top: 150,
  },
  ingredientesAEvitar: {
    top: 505,
  },
  restrictionsPageChild: {
    top: 540,
    fontSize: FontSize.size_lg,
    height: 42,
    width: 328,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 31,
    position: "absolute",
    borderRadius: Border.br_6xl,
    backgroundColor: Color.white,
    flexDirection: "row",
    padding: Padding.p_3xs,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  tartrazinaColoranteAmarillo: {
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    width: 255,
    top: 3,
    left: 10,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  tartrazinaColoranteAmarilloWrapper: {
    top: 600,
  },
  vectorIcon: {
    top: 613,
  },
  sorbitolWrapper: {
    top: 600,
  },
  vectorIcon1: {
    top: 674,
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
