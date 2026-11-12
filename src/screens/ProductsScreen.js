
import { useCallback, useState } from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import {
  listarProdutos,
  salvarProdutos,
} from "../storage/productStorage";

export default function ProductsScreen({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Carregar os produtos salvos
  const carregarProdutos = useCallback(async () => {
    try {
      setCarregando(true);

      const dados = await listarProdutos();

      setProdutos(Array.isArray(dados) ? dados : []);
    } catch (erro) {
      mostrarMensagem(
        "Erro",
        "Não foi possível carregar os produtos."
      );
    } finally {
      setCarregando(false);
    }
  }, []);

  // Atualizar a lista quando voltar para esta tela
  useFocusEffect(
    useCallback(() => {
      carregarProdutos();
    }, [carregarProdutos])
  );

  // Mensagens compatíveis com web e celular
  function mostrarMensagem(titulo, mensagem) {
    if (Platform.OS === "web") {
      globalThis.alert(`${titulo}\n\n${mensagem}`);
    } else {
      Alert.alert(titulo, mensagem);
    }
  }

  // Abrir formulário de cadastro
  function abrirCadastro() {
    navigation.navigate("FormularioProduto");
  }

  // Abrir formulário de edição
  function editarProduto(produto) {
    navigation.navigate("FormularioProduto", { produto });
  }

  // Excluir produto
  async function confirmarExclusao(produto) {
    let confirmou = false;

    if (Platform.OS === "web") {
      confirmou = globalThis.confirm(
        `Deseja realmente excluir "${produto.nome}"?`
      );
    } else {
      confirmou = await new Promise((resolve) => {
        Alert.alert(
          "Excluir produto",
          `Deseja realmente excluir "${produto.nome}"?`,
          [
            {
              text: "Cancelar",
              style: "cancel",
              onPress: () => resolve(false),
            },
            {
              text: "Excluir",
              style: "destructive",
              onPress: () => resolve(true),
            },
          ],
          { cancelable: true }
        );
      });
    }

    if (!confirmou) return;

    try {
      // Buscar os produtos atualizados
      const produtosAtuais = await listarProdutos();

      // Remover somente o produto escolhido
      const atualizados = produtosAtuais.filter(
        (item) => String(item.id) !== String(produto.id)
      );

      // Salvar a nova lista
      await salvarProdutos(atualizados);

      // Atualizar a tela
      setProdutos(atualizados);

      mostrarMensagem(
        "Sucesso",
        "Produto excluído com sucesso!"
      );
    } catch (erro) {
      mostrarMensagem(
        "Erro",
        "Não foi possível excluir o produto."
      );
    }
  }

  // Exibir cada produto
  function renderizarProduto({ item }) {
    return (
      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.nome}>{item.nome}</Text>

          <Text style={styles.categoria}>
            Categoria: {item.categoria}
          </Text>

          <Text style={styles.preco}>
            R$ {Number(item.preco).toFixed(2).replace(".", ",")}
          </Text>

          <Text style={styles.estoque}>
            Estoque: {item.estoque} unidade(s)
          </Text>
        </View>

        <View style={styles.acoes}>
          <TouchableOpacity
            style={styles.botaoEditar}
            onPress={() => editarProduto(item)}
          >
            <Text style={styles.textoBotao}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoExcluir}
            onPress={() => confirmarExclusao(item)}
          >
            <Text style={styles.textoBotao}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Tela de carregamento
  if (carregando) {
    return (
      <View style={styles.centralizado}>
        <ActivityIndicator size="large" color="#6D28D9" />

        <Text style={styles.carregando}>
          Carregando produtos...
        </Text>
      </View>
    );
  }

  // Tela principal
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Produtos cadastrados
      </Text>

      <Text style={styles.subtitulo}>
        Cadastre e gerencie os produtos da MB Açaiteria.
      </Text>

      <TouchableOpacity
        style={styles.botaoNovo}
        onPress={abrirCadastro}
      >
        <Text style={styles.textoBotaoNovo}>
          + Cadastrar produto
        </Text>
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderizarProduto}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum produto cadastrado ainda.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },

  centralizado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  carregando: {
    marginTop: 12,
    color: "#555555",
  },

  titulo: {
    fontSize: 23,
    color: "#4C1D95",
    fontWeight: "bold",
  },

  subtitulo: {
    fontSize: 14,
    color: "#666666",
    marginTop: 6,
    marginBottom: 16,
  },

  botaoNovo: {
    backgroundColor: "#6D28D9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  textoBotaoNovo: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  lista: {
    paddingBottom: 24,
    flexGrow: 1,
  },

  card: {
    borderWidth: 1,
    borderColor: "#E5D9FF",
    backgroundColor: "#FAF8FF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },

  info: {
    marginBottom: 12,
  },

  nome: {
    fontSize: 18,
    color: "#4C1D95",
    fontWeight: "bold",
  },

  categoria: {
    color: "#555555",
    marginTop: 5,
  },

  preco: {
    color: "#6D28D9",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 5,
  },

  estoque: {
    color: "#555555",
    marginTop: 4,
  },

  acoes: {
    flexDirection: "row",
    gap: 10,
  },

  botaoEditar: {
    flex: 1,
    backgroundColor: "#6D28D9",
    padding: 11,
    borderRadius: 8,
    alignItems: "center",
  },

  botaoExcluir: {
    flex: 1,
    backgroundColor: "#B91C1C",
    padding: 11,
    borderRadius: 8,
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  vazio: {
    color: "#777777",
    textAlign: "center",
    marginTop: 40,
    fontSize: 15,
  },
});
