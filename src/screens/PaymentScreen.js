import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function PaymentScreen({ navigation }) {
  const [metodo, setMetodo] = useState("pix");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF", padding: 20 }}>
      <TouchableOpacity style={[styles.opcao, metodo === "pix" && styles.ativo]} onPress={() => setMetodo("pix")}>
        <Text style={styles.opcaoTxt}>⚡ PIX</Text>
        <Text style={styles.opcaoSub}>Aprovação instantânea</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.opcao, metodo === "cartao" && styles.ativo]} onPress={() => setMetodo("cartao")}>
        <Text style={styles.opcaoTxt}>💳 Cartão de Crédito</Text>
        <Text style={styles.opcaoSub}>Débito ou crédito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.opcao, metodo === "dinheiro" && styles.ativo]} onPress={() => setMetodo("dinheiro")}>
        <Text style={styles.opcaoTxt}>💵 Dinheiro</Text>
        <Text style={styles.opcaoSub}>Pague na entrega</Text>
      </TouchableOpacity>

      <View style={styles.qrBox}>
        <Text style={{ fontSize: 40 }}>⚡</Text>
        <Text style={styles.qrTxt}>QR Code PIX</Text>
        <Text style={styles.qrSub}>O QR Code será gerado após confirmar o pedido.</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("OrderTracking")}>
          <Text style={styles.btnTxt}>Pagar R$ 24,90</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  opcao: { borderWidth: 1, borderColor: "#E5E5E5", borderRadius: 12, padding: 16, marginBottom: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  ativo: { borderColor: "#7C3AED", backgroundColor: "#F3E8FF" },
  opcaoTxt: { fontSize: 16, fontWeight: "600", color: "#333" },
  opcaoSub: { fontSize: 12, color: "#888" },
  qrBox: { backgroundColor: "#ECFDF5", padding: 30, borderRadius: 16, alignItems: "center", marginTop: 20 },
  qrTxt: { fontSize: 16, fontWeight: "700", color: "#10B981", marginTop: 10 },
  qrSub: { fontSize: 12, color: "#888", textAlign: "center", marginTop: 6 },
  footer: { flex: 1, justifyContent: "flex-end" },
  btn: { backgroundColor: "#7C3AED", padding: 16, borderRadius: 12, alignItems: "center" },
  btnTxt: { color: "#FFF", fontSize: 16, fontWeight: "700" }
});