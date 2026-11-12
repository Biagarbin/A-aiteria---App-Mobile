
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>MB</Text>
      </View>

      <Text style={styles.titulo}>Meu Perfil</Text>
      <Text style={styles.descricao}>
        Gerencie suas informações e seus pedidos.
      </Text>

      <View style={styles.card}>
        <TouchableOpacity style={styles.opcao}>
          <Text style={styles.opcaoTexto}>👤  Meus dados pessoais</Text>
        </TouchableOpacity>

        <View style={styles.divisor} />

        <TouchableOpacity style={styles.opcao}>
          <Text style={styles.opcaoTexto}>📍  Meus endereços</Text>
        </TouchableOpacity>

        <View style={styles.divisor} />

        <TouchableOpacity style={styles.opcao}>
          <Text style={styles.opcaoTexto}>📦  Meus pedidos</Text>
        </TouchableOpacity>

        <View style={styles.divisor} />

        <TouchableOpacity style={styles.opcao}>
          <Text style={styles.opcaoTexto}>⚙️  Configurações</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.botaoAdmin}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={styles.botaoAdminTexto}>
          Acessar gerenciamento de produtos
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: "#6D28D9",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarTexto: { color: "#FFFFFF", fontSize: 27, fontWeight: "bold" },
  titulo: { color: "#4C1D95", fontSize: 25, fontWeight: "bold", marginTop: 15 },
  descricao: { color: "#666666", marginTop: 7, marginBottom: 22 },
  card: {
    width: "100%",
    backgroundColor: "#F8F5FF",
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  opcao: { paddingVertical: 18 },
  opcaoTexto: { color: "#4C1D95", fontSize: 15, fontWeight: "500" },
  divisor: { height: 1, backgroundColor: "#E5D9FF" },
  botaoAdmin: {
    backgroundColor: "#6D28D9",
    borderRadius: 10,
    padding: 14,
    marginTop: 22,
    width: "100%",
    alignItems: "center",
  },
  botaoAdminTexto: { color: "#FFFFFF", fontWeight: "bold", textAlign: "center" },
});
