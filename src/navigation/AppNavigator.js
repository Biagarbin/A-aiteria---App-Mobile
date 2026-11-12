
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import CatalogScreen from "../screens/CatalogScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductFormScreen from "../screens/ProductFormScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6D28D9",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "MB Açaiteria",
          }}
        />

        <Stack.Screen
          name="CatalogoCliente"
          component={CatalogScreen}
          options={{
            title: "Cardápio",
          }}
        />

        <Stack.Screen
          name="AdminInicio"
          component={HomeScreen}
          options={{
            title: "Área administrativa",
          }}
        />

        <Stack.Screen
          name="Produtos"
          component={ProductsScreen}
          options={{
            title: "Gerenciar produtos",
          }}
        />

        <Stack.Screen
          name="FormularioProduto"
          component={ProductFormScreen}
          options={{
            title: "Cadastro de produto",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
