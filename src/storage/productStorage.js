
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@mb_acaiteria:produtos";

export async function listarProdutos() {
  try {
    const dados = await AsyncStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
  } catch (erro) {
    console.error("Erro ao listar produtos:", erro);
    throw erro;
  }
}

export async function salvarProdutos(produtos) {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(produtos)
    );
  } catch (erro) {
    console.error("Erro ao salvar produtos:", erro);
    throw erro;
  }
}
