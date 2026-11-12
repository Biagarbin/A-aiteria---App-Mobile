
import { View, Text, StyleSheet } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>🛒</Text>
      <Text style={styles.titulo}>Meu Carrinho</Text>
      <Text style={styles.descricao}>
        Seus produtos escolhidos aparecerão aqui.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Seu carrinho está vazio</Text>
        <Text style={styles.cardTexto}>
          Escolha seus açaís favoritos no catálogo para começar seu pedido.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  icone: { fontSize: 55, marginBottom: 15 },
  titulo: { fontSize: 25, fontWeight: "bold", color: "#4C1D95" },
  descricao: {
    color: "#666666",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 25,
  },
  card: {
    width: "100%",
    padding: 22,
    backgroundColor: "#F8F5FF",
    borderRadius: 15,
    alignItems: "center",
  },
  cardTitulo: { color: "#4C1D95", fontSize: 17, fontWeight: "bold" },
  cardTexto: {
    color: "#666666",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 10,
  },
});
