import React, { useState, useCallback } from "react";
import {
  View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { listarProdutos } from "../storage/productStorage";

const PRODUTOS_MOCK = [
  { id: "1", nome: "Açaí Tradicional", descricao: "Polpa pura de açaí batida com xarope de guaraná...", preco: 17.90, categoria: "Açaí", imagem: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=400" },
  { id: "2", nome: "Açaí com Sorvete de Maracujá", descricao: "Polpa de açaí cremosa com sorvete a tens...", preco: 19.90, categoria: "Açaí", imagem: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400" },
  { id: "3", nome: "Açaí Zero", descricao: "Polpa pura de açaí sem açúcar adicionado...", preco: 18.90, categoria: "Açaí", imagem: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=400" },
  { id: "4", nome: "Marmita de Açaí", descricao: "Açaí cremoso com banana e granola em marmita...", preco: 35.90, categoria: "Marmitas", imagem: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=400" },
];

const CATEGORIAS = ["Todos", "Açaí", "Marmitas"];

export default function CatalogScreen({ navigation }) {
  const [produtos, setProdutos] = useState(PRODUTOS_MOCK);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  // Descomente para usar os produtos reais do AsyncStorage
  // useFocusEffect(useCallback(() => {
  //   listarProdutos().then(lista => { if(lista.length > 0) setProdutos(lista); });
  // }, []));

  const produtosFiltrados = categoriaAtiva === "Todos" 
    ? produtos 
    : produtos.filter(p => p.categoria === categoriaAtiva);

  function formatarPreco(valor) {
    return Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function adicionarAoCarrinho(produto) {
    // Lógica futura: salvar no contexto ou AsyncStorage
    alert(`${produto.nome} adicionado ao carrinho!`);
  }

  const renderizarProduto = ({ item }) => (
    <View style={styles.cardProduto}>
      <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
      <View style={styles.infoProduto}>
        <Text style={styles.nomeProduto} numberOfLines={1}>{item.nome}</Text>
        <Text style={styles.descProduto} numberOfLines={2}>{item.descricao}</Text>
        <View style={styles.footerCard}>
          <Text style={styles.precoProduto}>{formatarPreco(item.preco)}</Text>
          <TouchableOpacity style={styles.botaoAdd} onPress={() => adicionarAoCarrinho(item)}>
            <Text style={styles.textoBotaoAdd}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Barra de Busca */}
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Buscar açaí, complementos..." 
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      {/* Banner Promocional */}
      <View style={styles.banner}>
        <View style={styles.bannerTextArea}>
          <Text style={styles.bannerTag}>OFERTA ESPECIAL</Text>
          <Text style={styles.bannerTitle}>5 acompanhamentos grátis!</Text>
          <Text style={styles.bannerSub}>Em qualquer tamanho de copo</Text>
        </View>
        <Image 
          source={{ uri: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=200" }} 
          style={styles.bannerImage} 
        />
      </View>

      {/* Categorias */}
      <Text style={styles.sectionTitle}>Categorias</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriasContainer}>
        {CATEGORIAS.map(cat => (
          <TouchableOpacity 
            key={cat} 
            style={[styles.categoriaBtn, categoriaAtiva === cat && styles.categoriaBtnAtiva]}
            onPress={() => setCategoriaAtiva(cat)}
          >
            <Text style={[styles.categoriaTxt, categoriaAtiva === cat && styles.categoriaTxtAtiva]}>
              {cat === "Todos" ? "🍇 " : cat === "Açaí" ? "🍧 " : "🍱 "}{cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de Produtos */}
      <Text style={styles.sectionTitle}>Todos os produtos</Text>
      <View style={styles.listaProdutos}>
        {produtosFiltrados.map(produto => (
          <View key={produto.id} style={styles.cardWrapper}>
            {renderizarProduto({ item: produto })}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  searchContainer: { padding: 15, backgroundColor: "#6D28D9", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  searchInput: { backgroundColor: "#FFF", borderRadius: 10, padding: 12, fontSize: 16 },
  
  banner: { margin: 15, backgroundColor: "#8B5CF6", borderRadius: 15, flexDirection: "row", overflow: "hidden", height: 120 },
  bannerTextArea: { flex: 1, padding: 15, justifyContent: "center" },
  bannerTag: { color: "#FFF", fontSize: 10, fontWeight: "bold", letterSpacing: 1 },
  bannerTitle: { color: "#FFF", fontSize: 20, fontWeight: "bold", marginTop: 5 },
  bannerSub: { color: "#EDE9FE", fontSize: 12, marginTop: 4 },
  bannerImage: { width: 100, height: 120 },

  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#333", marginHorizontal: 15, marginTop: 15, marginBottom: 10 },
  
  categoriasContainer: { paddingLeft: 15, marginBottom: 10 },
  categoriaBtn: { backgroundColor: "#FFF", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, marginRight: 10, borderWidth: 1, borderColor: "#E5E5E5" },
  categoriaBtnAtiva: { backgroundColor: "#6D28D9", borderColor: "#6D28D9" },
  categoriaTxt: { color: "#666", fontWeight: "600" },
  categoriaTxtAtiva: { color: "#FFF" },

  listaProdutos: { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 10, paddingBottom: 20 },
  cardWrapper: { width: "50%", padding: 5 },
  cardProduto: { backgroundColor: "#FFF", borderRadius: 12, overflow: "hidden", elevation: 3, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4 },
  imagemProduto: { width: "100%", height: 120 },
  infoProduto: { padding: 10 },
  nomeProduto: { fontSize: 14, fontWeight: "bold", color: "#333" },
  descProduto: { fontSize: 11, color: "#777", marginTop: 4, height: 30 },
  footerCard: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  precoProduto: { fontSize: 16, fontWeight: "bold", color: "#6D28D9" },
  botaoAdd: { backgroundColor: "#8B5CF6", width: 28, height: 28, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  textoBotaoAdd: { color: "#FFF", fontSize: 18, fontWeight: "bold", lineHeight: 22 },
});