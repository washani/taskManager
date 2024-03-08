import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../containers/Splash/Splash.tsx";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import BottomTabs from "../components/BottomTabs";


const Stack = createStackNavigator();

const Navigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTabs"
          component={BottomTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
