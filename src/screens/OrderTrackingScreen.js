import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";

export default function OrderTrackingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBox}>
        <Text style={{ fontSize: 50 }}>📦</Text>
        <View style={styles.statusBadge}><Text style={styles.statusTxt}>👨‍🍳 Preparando...</Text></View>
      </View>

      <View style={styles.cardInfo}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.pedidoId}>Pedido #MB-2854</Text>
          <View style={styles.tag}><Text style={styles.tagTxt}>Em preparo</Text></View>
        </View>
        <Text style={styles.tempo}>Previsão: 14:47 ~ 15:02 · 2 min atrás</Text>
      </View>

      <View style={styles.timeline}>
        <View style={styles.linhaAtiva} />
        <View style={styles.item}>
          <Text style={styles.iconeAtivo}>✅</Text>
          <View><Text style={styles.txtAtivo}>Pedido recebido</Text><Text style={styles.hora}>14:32</Text></View>
        </View>
        <View style={styles.item}>
          <Text style={styles.iconeAtivo}>👨‍🍳</Text>
          <View><Text style={styles.txtAtivo}>Em preparo</Text><Text style={styles.hora}>14:34</Text></View>
        </View>
        <View style={styles.item}>
          <Text style={styles.iconeInativo}>🛵</Text>
          <View><Text style={styles.txtInativo}>Saiu para entrega</Text><Text style={styles.hora}>—</Text></View>
        </View>
        <View style={styles.item}>
          <Text style={styles.iconeInativo}>🏠</Text>
          <View><Text style={styles.txtInativo}>Entregue!</Text><Text style={styles.hora}>—</Text></View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnCancelar} onPress={() => navigation.navigate("CustomerArea")}>
          <Text style={styles.btnCancelarTxt}>❌ Cancelar pedido</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9", padding: 20 },
  topBox: { backgroundColor: "#F3E8FF", borderRadius: 16, height: 180, alignItems: "center", justifyContent: "center" },
  statusBadge: { backgroundColor: "#7C3AED", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginTop: 10 },
  statusTxt: { color: "#FFF", fontWeight: "700" },
  cardInfo: { backgroundColor: "#FFF", padding: 16, borderRadius: 12, marginTop: 15 },
  pedidoId: { fontWeight: "700", fontSize: 16, color: "#333" },
  tag: { backgroundColor: "#FEF3C7", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  tagTxt: { color: "#D97706", fontSize: 11, fontWeight: "700" },
  tempo: { color: "#888", fontSize: 12, marginTop: 8 },
  timeline: { backgroundColor: "#FFF", padding: 20, borderRadius: 12, marginTop: 15, position: "relative" },
  linhaAtiva: { position: "absolute", left: 34, top: 35, bottom: 100, width: 2, backgroundColor: "#7C3AED" },
  item: { flexDirection: "row", alignItems: "center", marginBottom: 20, zIndex: 1 },
  iconeAtivo: { fontSize: 24, marginRight: 15, backgroundColor: "#FFF" },
  iconeInativo: { fontSize: 24, marginRight: 15, backgroundColor: "#FFF", opacity: 0.4 },
  txtAtivo: { fontSize: 15, fontWeight: "600", color: "#333" },
  txtInativo: { fontSize: 15, fontWeight: "600", color: "#AAA" },
  hora: { fontSize: 12, color: "#888", marginTop: 2 },
  footer: { flex: 1, justifyContent: "flex-end" },
  btnCancelar: { borderWidth: 1, borderColor: "#FCA5A5", padding: 16, borderRadius: 12, alignItems: "center" },
  btnCancelarTxt: { color: "#EF4444", fontWeight: "700" }
});