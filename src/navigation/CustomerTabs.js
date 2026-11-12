import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import CatalogScreen from "../screens/CatalogScreen"; 
import CartScreen from "../screens/CartScreen";
import PointsScreen from "../screens/PointsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function TextIcon({ simbolo, color }) {
  return <Text style={{ fontSize: 22, color: color }}>{simbolo}</Text>;
}

export default function CustomerTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Início"
      screenOptions={{
        headerShown: false, // Esconde o header padrão para a tela ficar mais limpa
        tabBarActiveTintColor: "#7C3AED",
        tabBarInactiveTintColor: "#A0A0A0",
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0, // Remove a linha superior
          elevation: 10, // Sombra suave (Android)
          shadowColor: "#000", // Sombra suave (iOS)
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 10,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "500" }
      }}
    >
      <Tab.Screen name="Início" component={CatalogScreen} options={{ tabBarIcon: ({ color }) => <TextIcon simbolo="🏠" color={color} /> }} />
      <Tab.Screen name="Carrinho" component={CartScreen} options={{ tabBarIcon: ({ color }) => <TextIcon simbolo="🛒" color={color} /> }} />
      <Tab.Screen name="Pontos" component={PointsScreen} options={{ tabBarIcon: ({ color }) => <TextIcon simbolo="⭐" color={color} /> }} />
      <Tab.Screen name="Perfil" component={ProfileScreen} options={{ tabBarIcon: ({ color }) => <TextIcon simbolo="👤" color={color} /> }} />
    </Tab.Navigator>
  );
}