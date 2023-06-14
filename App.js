const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Registrarse from "./screens/Registrarse";
import LoginPage from "./screens/LoginPage";
import Nutriscore from "./screens/Nutriscore";
import ProductDataPageNOAPTO from "./screens/ProductDataPageNOAPTO";
import ProductDataPageNOSEENCUEN from "./screens/ProductDataPageNOSEENCUEN";
import HistorialPage from "./screens/HistorialPage";
import DisagreePage from "./screens/DisagreePage";
import ProductDataPageAPTO from "./screens/ProductDataPageAPTO";
import RestrictionsPage from "./screens/RestrictionsPage";
import SplashPage from "./screens/SplashPage";
import ProductSearchPage from "./screens/ProductSearchPage";
import ScanPage from "./screens/ScanPage";
import HomePage from "./screens/HomePage";
import ProductDataPageSINRESTRICC from "./screens/ProductDataPageSINRESTRICC";
import ProductDataPageNOAPTO1 from "./screens/ProductDataPageNOAPTO1";
import ScanPage2 from "./screens/ScanPage2";
import IconHome21 from "./components/IconHome21";
import IconHome2 from "./components/IconHome2";
import IconUser1 from "./components/IconUser1";
import IconUser from "./components/IconUser";
import IconBookSaved1 from "./components/IconBookSaved1";
import IconBookSaved from "./components/IconBookSaved";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <IconHome2 />,
    <IconUser />,
    <IconBookSaved />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <IconHome21 />,
    <IconUser1 />,
    <IconBookSaved1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomePage"
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 390,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 56,
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="RestrictionsPage"
        component={RestrictionsPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="HistorialPage"
        component={HistorialPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Inter_thin: require("./assets/fonts/Inter_thin.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_extrabold: require("./assets/fonts/Inter_extrabold.ttf"),
    Inter_black: require("./assets/fonts/Inter_black.ttf"),
    Niramit_regular: require("./assets/fonts/Niramit_regular.ttf"),
    Niramit_semibold: require("./assets/fonts/Niramit_semibold.ttf"),
    Niramit_bold: require("./assets/fonts/Niramit_bold.ttf"),
    "Londrina Shadow_regular": require("./assets/fonts/Londrina_Shadow_regular.ttf"),
    "Work Sans_bold": require("./assets/fonts/Work_Sans_bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Registrarse"
              component={Registrarse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutriscore"
              component={Nutriscore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDataPageNOAPTO"
              component={ProductDataPageNOAPTO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDataPageNOSEENCUENTRAPRODUCTO"
              component={ProductDataPageNOSEENCUEN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DisagreePage"
              component={DisagreePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDataPageAPTO"
              component={ProductDataPageAPTO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashPage"
              component={SplashPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductSearchPage"
              component={ProductSearchPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScanPage"
              component={ScanPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDataPageSINRESTRICCION"
              component={ProductDataPageSINRESTRICC}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDataPageNOAPTO1"
              component={ProductDataPageNOAPTO1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScanPage2"
              component={ScanPage2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashPage />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
