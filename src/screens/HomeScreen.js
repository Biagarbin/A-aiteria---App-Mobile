import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MB</Text>
      <Text style={styles.title}>MB Açaiteria</Text>
      <Text style={styles.subtitle}>
        Seu açaí, do seu jeito!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={styles.buttonText}>
          Gerenciar produtos
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    color: "#6D28D9",
    fontSize: 58,
    fontWeight: "bold",
  },
  title: {
    color: "#6D28D9",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
  },
  subtitle: {
    color: "#555555",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 28,
  },
  button: {
    backgroundColor: "#6D28D9",
    padding: 16,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});