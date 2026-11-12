
import { useCallback, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { listarProdutos } from "../storage/productStorage";

export default function CatalogScreen() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const carregarProdutos = useCallback(async () => {
    try {
      setCarregando(true);
      const lista = await listarProdutos();
      setProdutos(lista);
    } catch (erro) {
      console.log("Erro ao carregar produtos:", erro);
    } finally {
      setCarregando(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      carregarProdutos();
    }, [carregarProdutos])
  );

  function formatarPreco(valor) {
    return Number(valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function renderizarProduto({ item }) {
    return (
      <View style={styles.card}>
        <View style={styles.imagemProduto}>
          <Text style={styles.emoji}>🍇</Text>
        </View>

        <View style={styles.informacoes}>
          <Text style={styles.nome}>{item.nome}</Text>

          <Text style={styles.categoria}>
            Categoria: {item.categoria}
          </Text>

          <Text style={styles.preco}>
            {formatarPreco(item.preco)}
          </Text>

          <Text style={styles.estoque}>
            {item.estoque > 0
              ? "Disponível"
              : "Produto indisponível"}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nosso cardápio</Text>

      <Text style={styles.subtitulo}>
        Escolha seu açaí favorito!
      </Text>

      {carregando ? (
        <ActivityIndicator
          size="large"
          color="#6D28D9"
          style={styles.carregando}
        />
      ) : (
        <FlatList
          data={produtos.filter((item) => item.estoque > 0)}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderizarProduto}
          contentContainerStyle={styles.lista}
          ListEmptyComponent={
            <Text style={styles.vazio}>
              Nenhum produto disponível no momento.
            </Text>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  titulo: {
    color: "#4C1D95",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitulo: {
    color: "#666666",
    fontSize: 16,
    marginTop: 6,
    marginBottom: 20,
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FAF7FF",
    borderWidth: 1,
    borderColor: "#E5D5FF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    alignItems: "center",
  },
  imagemProduto: {
    width: 85,
    height: 85,
    borderRadius: 12,
    backgroundColor: "#EDE3FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  emoji: {
    fontSize: 42,
  },
  informacoes: {
    flex: 1,
  },
  nome: {
    color: "#4C1D95",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  categoria: {
    color: "#666666",
    fontSize: 14,
    marginBottom: 5,
  },
  preco: {
    color: "#6D28D9",
    fontSize: 18,
    fontWeight: "bold",
  },
  estoque: {
    color: "#27834A",
    fontSize: 13,
    marginTop: 4,
  },
  carregando: {
    marginTop: 40,
  },
  vazio: {
    color: "#666666",
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },
});
