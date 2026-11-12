import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const RECOMPENSAS = [
  { id: 1, titulo: "Frete Grátis", desc: "Entrega sem custo no próximo pedido", pts: 50, cor: "#0EA5E9", icone: "🚚" },
  { id: 2, titulo: "10% de Desconto", desc: "No valor total do seu pedido", pts: 10, cor: "#8B5CF6", icone: "🏷️" },
  { id: 3, titulo: "20% de Desconto", desc: "No valor total do seu pedido", pts: 30, cor: "#10B981", icone: "👕" },
  { id: 4, titulo: "30% de Desconto", desc: "No valor total do seu pedido", pts: 50, cor: "#F59E0B", icone: "⭐" },
  { id: 5, titulo: "40% de Desconto", desc: "No valor total do seu pedido", pts: 70, cor: "#EF4444", icone: "🔥" },
  { id: 6, titulo: "50% de Desconto", desc: "No valor total do seu pedido", pts: 100, cor: "#7E22CE", icone: "💎" },
];

export default function PointsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <Text style={styles.title}>Resgatar recompensas</Text>

      {RECOMPENSAS.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: item.cor + "20" }]}>
            <Text style={{ fontSize: 24 }}>{item.icone}</Text>
          </View>
          
          <View style={styles.info}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>

          <View style={styles.rightArea}>
            <Text style={styles.ptsText}>⭐ {item.pts}</Text>
            <TouchableOpacity style={[styles.btnResgatar, { backgroundColor: item.cor }]}>
              <Text style={styles.btnTxt}>Resgatar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA", padding: 15 },
  title: { fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 15 },
  card: { flexDirection: "row", backgroundColor: "#FFF", borderRadius: 12, padding: 15, marginBottom: 10, alignItems: "center", elevation: 2, shadowColor: "#000", shadowOpacity: 0.05 },
  iconBox: { width: 50, height: 50, borderRadius: 12, alignItems: "center", justifyContent: "center", marginRight: 12 },
  info: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: "bold", color: "#333" },
  cardDesc: { fontSize: 12, color: "#777", marginTop: 4, lineHeight: 16 },
  rightArea: { alignItems: "flex-end" },
  ptsText: { fontSize: 12, fontWeight: "bold", color: "#333", marginBottom: 8 },
  btnResgatar: { paddingHorizontal: 15, paddingVertical: 6, borderRadius: 20 },
  btnTxt: { color: "#FFF", fontSize: 12, fontWeight: "bold" },
});