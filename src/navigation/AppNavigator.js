import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Telas de Autenticação
import LoginScreen from "../screens/LoginScreen";

// Navegação do Cliente
import CustomerTabs from "./CustomerTabs";

// Telas do Fluxo de Compra (Minimalistas)
import ProductDetailScreen from "../screens/ProductDetailScreen";
import AddressScreen from "../screens/AddressScreen";
import DeliveryTypeScreen from "../screens/DeliveryTypeScreen";
import PaymentScreen from "../screens/PaymentScreen";
import OrderTrackingScreen from "../screens/OrderTrackingScreen";

// Telas do Admin
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
          // Design minimalista: Header branco, texto escuro e sem sombra
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerTintColor: "#333333",
          headerTitleStyle: { fontWeight: "600", fontSize: 18 },
          headerShadowVisible: false, 
          contentStyle: { backgroundColor: "#F9F9F9" },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        
        {/* Área do Cliente (Tabs) */}
        <Stack.Screen name="CustomerArea" component={CustomerTabs} options={{ headerShown: false }} />

        {/* Fluxo de Compra (Telas fora das Tabs) */}
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: "Detalhes do Produto" }} />
        <Stack.Screen name="Cart" component={CustomerTabs} options={{ headerShown: false }} /> {/* Fallback para tab do carrinho */}
        <Stack.Screen name="Address" component={AddressScreen} options={{ title: "Endereço de entrega" }} />
        <Stack.Screen name="DeliveryType" component={DeliveryTypeScreen} options={{ title: "Entrega ou Retirada" }} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: "Forma de pagamento" }} />
        <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} options={{ title: "Acompanhar pedido", headerLeft: () => null }} />

        {/* Área Admin */}
        <Stack.Screen name="AdminInicio" component={HomeScreen} options={{ title: "Admin" }} />
        <Stack.Screen name="Produtos" component={ProductsScreen} options={{ title: "Gerenciar Produtos" }} />
        <Stack.Screen name="FormularioProduto" component={ProductFormScreen} options={{ title: "Produto" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}