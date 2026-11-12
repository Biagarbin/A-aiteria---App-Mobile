import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";

const TAMANHOS = [
  { id: "P", ml: "300ml", preco: 12.90 },
  { id: "M", ml: "500ml", preco: 17.90 },
  { id: "G", ml: "700ml", preco: 22.90 },
  { id: "GG", ml: "1 Litro", preco: 28.90 },
];

export default function ProductDetailScreen({ navigation }) {
  const [tamanhoSel, setTamanhoSel] = useState("M");
  const [qtd, setQtd] = useState(1);

  const precoBase = TAMANHOS.find(t => t.id === tamanhoSel)?.preco || 0;
  const total = precoBase * qtd;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=600" }} style={styles.imagem} />
        
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Açaí Tradicional</Text>
          <Text style={styles.descricao}>Polpa pura de açaí batida com xarope de guaraná e banana, na textura cremosa e sabor autêntico da Amazônia.</Text>

          <Text style={styles.sectionTitle}>Tamanho do copo</Text>
          <View style={styles.tamanhosRow}>
            {TAMANHOS.map(t => (
              <TouchableOpacity 
                key={t.id} 
                style={[styles.tamanhoCard, tamanhoSel === t.id && styles.tamanhoAtivo]}
                onPress={() => setTamanhoSel(t.id)}
              >
                <Text style={[styles.tamanhoId, tamanhoSel === t.id && styles.textoAtivo]}>{t.id}</Text>
                <Text style={styles.tamanhoMl}>{t.ml}</Text>
                <Text style={[styles.tamanhoPreco, tamanhoSel === t.id && styles.textoAtivo]}>R$ {t.preco.toFixed(2).replace(".", ",")}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Adicionais (5 grátis)</Text>
          <Text style={styles.subText}>0/5 selecionados grátis.</Text>
          {/* Exemplo de adicionais - pode ser mapeado como os tamanhos */}
          <View style={styles.adicionaisGrid}>
            {["Banana", "Morango", "Granola", "Leite Cond."].map((item, index) => (
              <TouchableOpacity key={index} style={styles.adicionalCard}>
                <Text style={styles.adicionalTxt}>{item}</Text>
                <Text style={styles.adicionalPreco}>Grátis</Text>
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </ScrollView>

      {/* Footer Fixo */}
      <View style={styles.footer}>
        <View style={styles.qtdContainer}>
          <TouchableOpacity style={styles.btnQtd} onPress={() => setQtd(Math.max(1, qtd - 1))}><Text style={styles.btnQtdTxt}>-</Text></TouchableOpacity>
          <Text style={styles.qtdTxt}>{qtd}</Text>
          <TouchableOpacity style={styles.btnQtd} onPress={() => setQtd(qtd + 1)}><Text style={styles.btnQtdTxt}>+</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate("Carrinho")}>
          <Text style={styles.btnAddTxt}>Adicionar • R$ {total.toFixed(2).replace(".", ",")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  imagem: { width: "100%", height: 250 },
  conteudo: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: "700", color: "#333" },
  descricao: { fontSize: 14, color: "#666", marginTop: 8, lineHeight: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "600", color: "#333", marginTop: 24, marginBottom: 8 },
  subText: { fontSize: 13, color: "#888", marginBottom: 12 },
  tamanhosRow: { flexDirection: "row", gap: 10 },
  tamanhoCard: { flex: 1, borderWidth: 1, borderColor: "#E5E5E5", borderRadius: 12, padding: 12, alignItems: "center" },
  tamanhoAtivo: { borderColor: "#7C3AED", backgroundColor: "#F3E8FF" },
  tamanhoId: { fontSize: 18, fontWeight: "700", color: "#333" },
  tamanhoMl: { fontSize: 12, color: "#888", marginTop: 4 },
  tamanhoPreco: { fontSize: 14, fontWeight: "600", color: "#333", marginTop: 8 },
  textoAtivo: { color: "#7C3AED" },
  adicionaisGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  adicionalCard: { width: "48%", flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderColor: "#E5E5E5", borderRadius: 8, padding: 12 },
  adicionalTxt: { fontSize: 14, color: "#333" },
  adicionalPreco: { fontSize: 12, color: "#10B981", fontWeight: "600" },
  
  footer: { flexDirection: "row", padding: 20, borderTopWidth: 1, borderTopColor: "#F0F0F0", backgroundColor: "#FFF", alignItems: "center" },
  qtdContainer: { flexDirection: "row", alignItems: "center", marginRight: 15 },
  btnQtd: { width: 32, height: 32, borderRadius: 16, backgroundColor: "#F3F4F6", alignItems: "center", justifyContent: "center" },
  btnQtdTxt: { fontSize: 18, fontWeight: "600", color: "#333" },
  qtdTxt: { marginHorizontal: 12, fontSize: 16, fontWeight: "600" },
  btnAdd: { flex: 1, backgroundColor: "#7C3AED", padding: 16, borderRadius: 12, alignItems: "center" },
  btnAddTxt: { color: "#FFF", fontSize: 16, fontWeight: "700" },
});