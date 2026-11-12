
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import PointsScreen from "../screens/PointsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function CustomerTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Início"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6D28D9",
        },
        headerTintColor: "#FFFFFF",
        tabBarActiveTintColor: "#6D28D9",
        tabBarInactiveTintColor: "#888888",
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 7,
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E5D9FF",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          title: "MB Açaiteria",
          tabBarIcon: () => <TextIcon simbolo="⌂" />,
        }}
      />

      <Tab.Screen
        name="Carrinho"
        component={CartScreen}
        options={{
          tabBarIcon: () => <TextIcon simbolo="🛒" />,
        }}
      />

      <Tab.Screen
        name="Pontos"
        component={PointsScreen}
        options={{
          tabBarIcon: () => <TextIcon simbolo="⭐" />,
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <TextIcon simbolo="👤" />,
        }}
      />
    </Tab.Navigator>
  );
}

import { Text } from "react-native";

function TextIcon({ simbolo }) {
  return <Text style={{ fontSize: 20 }}>{simbolo}</Text>;
}
