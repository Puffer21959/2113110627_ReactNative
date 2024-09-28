// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector, useAppDispatch } from "./redux-toolkit/hook";
import {
  selectAuthState,
  setIsLoading,
  setIsLogin,
  setProfile,
} from "./auth/auth-slice";
import { getProfile } from "./services/auth-service";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";

import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Detail" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  //const [isLogin] = useState(false);
  //use useAppSelector to pull 'state' from 'store'
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await getProfile();

      /*if (response?.status === 200) {
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }*/
      if (response?.data.data.user) {
        dispatch(setProfile(response.data.data.user));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      checkLogin();
    }, [])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {/*ternary operator if 'isLogin' is false go to login screen */}
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>

      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
//export default App;
