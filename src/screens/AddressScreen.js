import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export default function AddressScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.gpsBtn}>
          <Text style={styles.gpsTxt}>📍 Usar minha localização atual</Text>
        </TouchableOpacity>
        <Text style={styles.divider}>ou preencha manualmente</Text>

        <Text style={styles.label}>CEP *</Text>
        <TextInput style={styles.input} placeholder="00000-000" keyboardType="numeric" />

        <Text style={styles.label}>Rua / Avenida *</Text>
        <TextInput style={styles.input} placeholder="Ex: Rua das Flores" />

        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Número *</Text>
            <TextInput style={styles.input} placeholder="Ex: 142" keyboardType="numeric" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Complemento</Text>
            <TextInput style={styles.input} placeholder="Apto, bloco..." />
          </View>
        </View>

        <Text style={styles.label}>Bairro</Text>
        <TextInput style={styles.input} placeholder="Seu bairro" />

        <Text style={styles.label}>Referência</Text>
        <TextInput style={styles.input} placeholder="Ponto de referência" />

      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("DeliveryType")}>
          <Text style={styles.btnTxt}>Confirmar endereço</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 100 },
  gpsBtn: { borderWidth: 1, borderColor: "#E5E5E5", padding: 16, borderRadius: 12, alignItems: "center" },
  gpsTxt: { color: "#7C3AED", fontWeight: "600" },
  divider: { textAlign: "center", color: "#888", marginVertical: 20, fontSize: 13 },
  label: { fontSize: 14, fontWeight: "600", color: "#333", marginBottom: 6 },
  input: { borderWidth: 1, borderColor: "#E5E5E5", borderRadius: 12, padding: 14, marginBottom: 16, fontSize: 15 },
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: "#FFF" },
  btn: { backgroundColor: "#7C3AED", padding: 16, borderRadius: 12, alignItems: "center" },
  btnTxt: { color: "#FFF", fontSize: 16, fontWeight: "700" }
});