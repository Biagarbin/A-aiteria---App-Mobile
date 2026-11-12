
import { View, Text, StyleSheet } from "react-native";

export default function PointsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>⭐</Text>
      <Text style={styles.titulo}>MB Pontos</Text>
      <Text style={styles.descricao}>
        Seu programa de fidelidade!
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>SEUS PONTOS</Text>
        <Text style={styles.pontos}>0 pontos</Text>
        <Text style={styles.texto}>
          Faça pedidos e acumule pontos para aproveitar benefícios.
        </Text>
      </View>

      <Text style={styles.aviso}>
        Seus pontos e recompensas serão conectados ao histórico de pedidos
        na próxima etapa.
      </Text>
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
  descricao: { color: "#666666", marginTop: 8, marginBottom: 25 },
  card: {
    width: "100%",
    backgroundColor: "#6D28D9",
    borderRadius: 18,
    padding: 25,
    alignItems: "center",
  },
  label: { color: "#EDE9FE", fontSize: 13, fontWeight: "bold" },
  pontos: { color: "#FFFFFF", fontSize: 32, fontWeight: "bold", marginTop: 12 },
  texto: {
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 12,
  },
  aviso: {
    color: "#777777",
    textAlign: "center",
    marginTop: 22,
    lineHeight: 21,
  },
});
