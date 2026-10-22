import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductFormScreen from "../screens/ProductFormScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: "#6D28D9" },
          headerTintColor: "#FFFFFF",
          contentStyle: { backgroundColor: "#FFFFFF" },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{ title: "MB Açaiteria" }}
        />

        <Stack.Screen
          name="Produtos"
          component={ProductsScreen}
          options={{ title: "Gerenciar produtos" }}
        />

        <Stack.Screen
          name="FormularioProduto"
          component={ProductFormScreen}
          options={{ title: "Cadastro de produto" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}