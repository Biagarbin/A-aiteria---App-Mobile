import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function DeliveryTypeScreen({ navigation }) {
  const [tipo, setTipo] = useState("entrega");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.card, tipo === "entrega" && styles.cardAtivo]} onPress={() => setTipo("entrega")}>
          <Text style={{ fontSize: 30 }}>🛵</Text>
          <Text style={styles.cardTitle}>Entrega</Text>
          <Text style={styles.cardSub}>30-45 min</Text>
          <Text style={styles.gratis}>Grátis</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, tipo === "retirada" && styles.cardAtivo]} onPress={() => setTipo("retirada")}>
          <Text style={{ fontSize: 30 }}>🏪</Text>
          <Text style={styles.cardTitle}>Retirada</Text>
          <Text style={styles.cardSub}>15-20 min</Text>
          <Text style={{ color: "#10B981", fontSize: 13, fontWeight: "600", marginTop: 8 }}>No local</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapaBox}>
        <Text style={{ color: "#888" }}>📍 Mapa da entrega</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Payment")}>
          <Text style={styles.btnTxt}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9", padding: 20 },
  row: { flexDirection: "row", gap: 15 },
  card: { flex: 1, backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E5E5E5", borderRadius: 16, padding: 20, alignItems: "center" },
  cardAtivo: { borderColor: "#7C3AED", backgroundColor: "#F3E8FF" },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#333", marginTop: 10 },
  cardSub: { fontSize: 12, color: "#888", marginTop: 4 },
  gratis: { color: "#7C3AED", fontSize: 13, fontWeight: "600", marginTop: 8 },
  mapaBox: { backgroundColor: "#EDE9FE", height: 150, borderRadius: 16, marginTop: 20, alignItems: "center", justifyContent: "center" },
  footer: { flex: 1, justifyContent: "flex-end" },
  btn: { backgroundColor: "#7C3AED", padding: 16, borderRadius: 12, alignItems: "center" },
  btnTxt: { color: "#FFF", fontSize: 16, fontWeight: "700" }
});