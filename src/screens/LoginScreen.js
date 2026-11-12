
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Text style={styles.logo}>MB</Text>
        <Text style={styles.titulo}>MB Açaiteria</Text>
        <Text style={styles.subtitulo}>
          Seu açaí, do seu jeito!
        </Text>
      </View>

      <View style={styles.acessos}>
        <Text style={styles.pergunta}>
          Como deseja acessar?
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("CatalogoCliente")}
        >
          <Text style={styles.textoBotao}>
            Entrar como cliente
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => navigation.navigate("AdminInicio")}
        >
          <Text style={styles.textoBotaoSecundario}>
            Entrar como administrador
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-around",
    padding: 24,
  },
  logoArea: {
    alignItems: "center",
  },
  logo: {
    color: "#6D28D9",
    fontSize: 76,
    fontWeight: "bold",
  },
  titulo: {
    color: "#6D28D9",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 8,
  },
  subtitulo: {
    color: "#555555",
    fontSize: 17,
    marginTop: 8,
  },
  acessos: {
    width: "100%",
  },
  pergunta: {
    color: "#4C1D95",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#6D28D9",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 14,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoSecundario: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#6D28D9",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  textoBotaoSecundario: {
    color: "#6D28D9",
    fontSize: 16,
    fontWeight: "bold",
  },
});
