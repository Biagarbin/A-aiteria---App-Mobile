import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

export default function CartScreen({ navigation }) {
  const [incluirTalher, setIncluirTalher] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Meu Carrinho</Text>
          <View style={styles.badge}><Text style={styles.badgeTxt}>1 item</Text></View>
        </View>

        {/* Banner Pet */}
        <View style={styles.bannerPet}>
          <Text style={styles.bannerTitle}>🐾 Seu pet também merece!</Text>
          <Text style={styles.bannerDesc}>Adicione um açaí pet seguro ao pedido.</Text>
          <TouchableOpacity style={styles.bannerBtn}>
            <Text style={styles.bannerBtnTxt}>+ Açaí Pet R$ 12,90</Text>
          </TouchableOpacity>
        </View>

        {/* Item no Carrinho */}
        <View style={styles.cardItem}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemNome}>Açaí Tradicional</Text>
            <Text style={styles.itemDetalhes}>Tam. M · Tradicional</Text>
            <Text style={styles.itemPreco}>R$ 17,90</Text>
          </View>
          <TouchableOpacity><Text style={styles.btnRemover}>Remover</Text></TouchableOpacity>
        </View>

        {/* Switch Talher */}
        <View style={styles.cardRow}>
          <Text style={styles.rowTxt}>🍴 Incluir talher?</Text>
          <Switch value={incluirTalher} onValueChange={setIncluirTalher} trackColor={{ false: "#E5E5E5", true: "#7C3AED" }} />
        </View>

        {/* Resumo */}
        <View style={styles.cardResumo}>
          <View style={styles.linhaResumo}><Text style={styles.resumoLabel}>Subtotal</Text><Text style={styles.resumoValor}>R$ 17,90</Text></View>
          <View style={styles.linhaResumo}><Text style={styles.resumoLabel}>Entrega</Text><Text style={styles.resumoValor}>R$ 7,00</Text></View>
          <View style={[styles.linhaResumo, { marginTop: 12 }]}><Text style={styles.totalLabel}>Total</Text><Text style={styles.totalValor}>R$ 24,90</Text></View>
        </View>

      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnFinalizar} onPress={() => navigation.navigate("Address")}>
          <Text style={styles.btnFinalizarTxt}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  scrollContent: { padding: 20, paddingBottom: 100 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  headerTitle: { fontSize: 22, fontWeight: "700", color: "#333" },
  badge: { backgroundColor: "#F3E8FF", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeTxt: { color: "#7C3AED", fontSize: 12, fontWeight: "600" },
  
  bannerPet: { backgroundColor: "#7C3AED", padding: 16, borderRadius: 16, marginBottom: 16 },
  bannerTitle: { color: "#FFF", fontSize: 16, fontWeight: "700" },
  bannerDesc: { color: "#E9D5FF", fontSize: 13, marginTop: 4 },
  bannerBtn: { backgroundColor: "#FFF", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, alignSelf: "flex-start", marginTop: 12 },
  bannerBtnTxt: { color: "#7C3AED", fontSize: 12, fontWeight: "700" },

  cardItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: "#F0F0F0" },
  itemNome: { fontSize: 16, fontWeight: "600", color: "#333" },
  itemDetalhes: { fontSize: 13, color: "#888", marginTop: 4 },
  itemPreco: { fontSize: 16, fontWeight: "700", color: "#7C3AED", marginTop: 8 },
  btnRemover: { color: "#EF4444", fontSize: 13, fontWeight: "500" },

  cardRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#FFF", padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: "#F0F0F0" },
  rowTxt: { fontSize: 15, color: "#333", fontWeight: "500" },

  cardResumo: { backgroundColor: "#FFF", padding: 16, borderRadius: 12, borderWidth: 1, borderColor: "#F0F0F0" },
  linhaResumo: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  resumoLabel: { color: "#888", fontSize: 14 },
  resumoValor: { color: "#333", fontSize: 14, fontWeight: "500" },
  totalLabel: { color: "#333", fontSize: 18, fontWeight: "700" },
  totalValor: { color: "#7C3AED", fontSize: 18, fontWeight: "700" },

  footer: { position: "absolute", bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: "#FFF", borderTopWidth: 1, borderTopColor: "#F0F0F0" },
  btnFinalizar: { backgroundColor: "#7C3AED", padding: 16, borderRadius: 12, alignItems: "center" },
  btnFinalizarTxt: { color: "#FFF", fontSize: 16, fontWeight: "700" },
});