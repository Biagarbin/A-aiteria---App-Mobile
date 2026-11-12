import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header Roxo */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={{ fontSize: 40 }}>👤</Text>
        </View>
        <Text style={styles.nome}>Maria Silva</Text>
        <Text style={styles.email}>maria@email.com</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValor}>127</Text>
            <Text style={styles.statLabel}>Pontos</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValor}>2</Text>
            <Text style={styles.statLabel}>Pedidos</Text>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabActive}>
            <Text style={styles.tabActiveTxt}>👤 Meu Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabInactive}>
            <Text style={styles.tabInactiveTxt}>📦 Meus Pedidos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Histórico de Pedidos */}
      <View style={styles.historicoContainer}>
        <View style={styles.cardPedido}>
          <View style={styles.cardPedidoHeader}>
            <Text style={styles.pedidoId}>Pedido #MB-2847</Text>
            <View style={styles.tagEntregue}><Text style={styles.tagEntregueTxt}>Entregue</Text></View>
          </View>
          <Text style={styles.pedidoData}>Hoje · 14:32</Text>
          <Text style={styles.pedidoDesc}>Açaí Tradicional G + Combo Tutor & Pet</Text>
          <Text style={styles.pedidoTotal}>R$ 51,80</Text>
          
          <TouchableOpacity style={styles.btnRepetir} disabled>
            <Text style={styles.btnRepetirTxt}>🔄 Repetir compra indisponível para pedidos antigos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardPedido}>
          <View style={styles.cardPedidoHeader}>
            <Text style={styles.pedidoId}>Pedido #MB-2843</Text>
            <View style={styles.tagEntregue}><Text style={styles.tagEntregueTxt}>Entregue</Text></View>
          </View>
          <Text style={styles.pedidoData}>Hoje · 11:22</Text>
          <Text style={styles.pedidoDesc}>Açaí Tradicional M + Açaí Pet</Text>
          <Text style={styles.pedidoTotal}>R$ 30,80</Text>
          
          <TouchableOpacity style={styles.btnRepetir} disabled>
            <Text style={styles.btnRepetirTxt}>🔄 Repetir compra indisponível para pedidos antigos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  header: { backgroundColor: "#7C3AED", padding: 20, alignItems: "center", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingTop: 40, paddingBottom: 30 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#EDE9FE", alignItems: "center", justifyContent: "center", marginBottom: 10 },
  nome: { color: "#FFF", fontSize: 22, fontWeight: "bold" },
  email: { color: "#DDD6FE", fontSize: 14, marginTop: 4 },
  
  statsContainer: { flexDirection: "row", gap: 15, marginTop: 20 },
  statBox: { backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 12, paddingVertical: 10, paddingHorizontal: 25, alignItems: "center" },
  statValor: { color: "#FFF", fontSize: 20, fontWeight: "bold" },
  statLabel: { color: "#EDE9FE", fontSize: 12, marginTop: 2 },

  tabContainer: { flexDirection: "row", backgroundColor: "#6D28D9", borderRadius: 25, padding: 5, marginTop: 25, width: "100%" },
  tabActive: { flex: 1, backgroundColor: "#FFF", borderRadius: 20, paddingVertical: 10, alignItems: "center" },
  tabActiveTxt: { color: "#6D28D9", fontWeight: "bold" },
  tabInactive: { flex: 1, paddingVertical: 10, alignItems: "center" },
  tabInactiveTxt: { color: "#FFF", fontWeight: "bold" },

  historicoContainer: { padding: 15 },
  cardPedido: { backgroundColor: "#FFF", borderRadius: 15, padding: 15, marginBottom: 15, elevation: 2 },
  cardPedidoHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  pedidoId: { fontSize: 15, fontWeight: "bold", color: "#333" },
  tagEntregue: { backgroundColor: "#D1FAE5", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  tagEntregueTxt: { color: "#059669", fontSize: 11, fontWeight: "bold" },
  pedidoData: { fontSize: 12, color: "#777", marginTop: 5 },
  pedidoDesc: { fontSize: 14, color: "#555", marginTop: 10 },
  pedidoTotal: { fontSize: 18, fontWeight: "bold", color: "#6D28D9", marginTop: 10 },
  
  btnRepetir: { marginTop: 15, borderWidth: 1, borderColor: "#E5E5E5", borderStyle: "dashed", padding: 10, borderRadius: 10, alignItems: "center" },
  btnRepetirTxt: { color: "#999", fontSize: 12 },
});