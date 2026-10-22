
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

import {
  listarProdutos,
  salvarProdutos,
} from "../storage/productStorage";

export default function ProductFormScreen({ navigation, route }) {
  const produtoExistente = route.params?.produto;

  const [nome, setNome] = useState(produtoExistente?.nome ?? "");
  const [categoria, setCategoria] = useState(
    produtoExistente?.categoria ?? "Tradicional"
  );
  const [preco, setPreco] = useState(
    produtoExistente ? String(produtoExistente.preco) : ""
  );
  const [estoque, setEstoque] = useState(
    produtoExistente ? String(produtoExistente.estoque) : "0"
  );
  const [salvando, setSalvando] = useState(false);

  async function salvar() {
    const nomeLimpo = nome.trim();
    const categoriaLimpa = categoria.trim();
    const precoNumerico = Number(preco.replace(",", "."));
    const estoqueNumerico = Number(estoque);

    if (!nomeLimpo || !categoriaLimpa || !preco.trim() || !estoque.trim()) {
      Alert.alert("Campos obrigatórios", "Preencha todos os campos.");
      return;
    }

    if (!Number.isFinite(precoNumerico) || precoNumerico <= 0) {
      Alert.alert("Preço inválido", "Informe um preço maior que zero.");
      return;
    }

    if (
      !Number.isInteger(estoqueNumerico) ||
      estoqueNumerico < 0
    ) {
      Alert.alert(
        "Estoque inválido",
        "Informe uma quantidade inteira igual ou maior que zero."
      );
      return;
    }

    try {
      setSalvando(true);

      const produtos = await listarProdutos();

      if (produtoExistente) {
        const atualizados = produtos.map((item) =>
          item.id === produtoExistente.id
            ? {
                ...item,
                nome: nomeLimpo,
                categoria: categoriaLimpa,
                preco: precoNumerico,
                estoque: estoqueNumerico,
              }
            : item
        );

        await salvarProdutos(atualizados);
        Alert.alert("Sucesso", "Produto atualizado!");
      } else {
        const novoProduto = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          nome: nomeLimpo,
          categoria: categoriaLimpa,
          preco: precoNumerico,
          estoque: estoqueNumerico,
        };

        await salvarProdutos([...produtos, novoProduto]);
        Alert.alert("Sucesso", "Produto cadastrado!");
      }

      navigation.goBack();
    } catch (erro) {
      Alert.alert(
        "Erro",
        "Não foi possível salvar o produto. Tente novamente."
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titulo}>
        {produtoExistente ? "Editar produto" : "Novo produto"}
      </Text>

      <Text style={styles.descricao}>
        Informe os dados do produto da MB Açaiteria.
      </Text>

      <Text style={styles.label}>Nome do produto</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Ex.: Açaí de 500 ml"
        placeholderTextColor="#888888"
        maxLength={80}
      />

      <Text style={styles.label}>Categoria</Text>
      <TextInput
        style={styles.input}
        value={categoria}
        onChangeText={setCategoria}
        placeholder="Ex.: Tradicional ou Pet"
        placeholderTextColor="#888888"
        maxLength={50}
      />

      <Text style={styles.label}>Preço (R$)</Text>
      <TextInput
        style={styles.input}
        value={preco}
        onChangeText={setPreco}
        placeholder="Ex.: 25,90"
        placeholderTextColor="#888888"
        keyboardType="decimal-pad"
      />

      <Text style={styles.label}>Quantidade em estoque</Text>
      <TextInput
        style={styles.input}
        value={estoque}
        onChangeText={setEstoque}
        placeholder="Ex.: 20"
        placeholderTextColor="#888888"
        keyboardType="number-pad"
      />

      <TouchableOpacity
        style={[styles.botao, salvando && styles.botaoDesativado]}
        onPress={salvar}
        disabled={salvando}
      >
        <Text style={styles.textoBotao}>
          {salvando
            ? "Salvando..."
            : produtoExistente
              ? "Salvar alterações"
              : "Cadastrar produto"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoCancelar}
        onPress={() => navigation.goBack()}
        disabled={salvando}
      >
        <Text style={styles.textoCancelar}>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  conteudo: {
    padding: 20,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4C1D95",
  },
  descricao: {
    color: "#666666",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4C1D95",
    marginBottom: 7,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D8C9F5",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 13,
    fontSize: 16,
    color: "#222222",
    marginBottom: 18,
  },
  botao: {
    backgroundColor: "#6D28D9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  botaoDesativado: {
    opacity: 0.6,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  botaoCancelar: {
    borderWidth: 1,
    borderColor: "#6D28D9",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  textoCancelar: {
    color: "#6D28D9",
    fontWeight: "bold",
    fontSize: 16,
  },
});
