import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Personal from "../../containers/PersonalScreen";
import Work from "../../containers/WorkScreen";
import { Image, StyleSheet, Platform } from "react-native";
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as RF,
} from "react-native-responsive-dimensions";
import { Colors } from "../../styles";


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: Colors.GREEN,
      tabBarInactiveTintColor: Colors.WHITE,
      tabBarStyle: { height: hp(10), backgroundColor: Colors.THEME_PINK },
      tabBarLabelStyle: { fontSize: RF(1.5),fontWeight:'600'},
      tabBarItemStyle:{ margin: Platform.OS === 'ios' ? 6 : 18 }
    }}
    >
      <Tab.Screen
        name="Personal"
        component={Personal}
        options={{
          headerShown: false,
          tabBarLabel: "Personal",
          tabBarIcon: ({focused}) => (
            <Image source={require('../../assets/personal.png')} style={ focused ? styles.imageIconActive : styles.imageIconInactive} />
          ),
        }}
      />
      <Tab.Screen
        name="Work"
        component={Work}
        options={{
          headerShown: false,
          tabBarLabel: "Work",
          tabBarIcon: ({focused}) => (
            <Image source={require('../../assets/work.png')} style={ focused ? styles.imageIconActive : styles.imageIconInactive}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;


const styles = StyleSheet.create({
  imageIconActive:{
    width: wp(6),
    height: wp(6),
    tintColor: Colors.GREEN,
  },
  imageIconInactive:{
    width: wp(6),
    height: wp(6),
    tintColor: Colors.WHITE,
  }

})