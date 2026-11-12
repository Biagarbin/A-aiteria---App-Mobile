import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoArea}>
        <Text style={styles.logo}>MB</Text>
        <Text style={styles.titulo}>MB Açaiteria</Text>
        <Text style={styles.subtitulo}>Seu açaí, do seu jeito!</Text>
      </View>

      <View style={styles.acessos}>
        <Text style={styles.pergunta}>Como deseja acessar?</Text>

        {/* BOTÃO CLIENTE */}
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("CustomerArea")}
        >
          <Text style={styles.textoBotao}>Entrar como cliente</Text>
        </TouchableOpacity>

        {/* BOTÃO ADMIN */}
        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => navigation.navigate("AdminInicio")}
        >
          <Text style={styles.textoBotaoSecundario}>Entrar como administrador</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA", justifyContent: "space-around", padding: 24 },
  logoArea: { alignItems: "center" },
  logo: { color: "#7C3AED", fontSize: 76, fontWeight: "800", letterSpacing: -2 },
  titulo: { color: "#333", fontSize: 26, fontWeight: "700", marginTop: 8 },
  subtitulo: { color: "#666", fontSize: 16, marginTop: 8 },
  acessos: { width: "100%" },
  pergunta: { color: "#333", fontSize: 18, fontWeight: "600", marginBottom: 20, textAlign: "center" },
  botao: { backgroundColor: "#7C3AED", padding: 18, borderRadius: 16, alignItems: "center", marginBottom: 14, shadowColor: "#7C3AED", shadowOpacity: 0.3, shadowOffset: {width: 0, height: 4}, shadowRadius: 8, elevation: 4 },
  textoBotao: { color: "#FFF", fontSize: 16, fontWeight: "600" },
  botaoSecundario: { backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E5E5E5", padding: 18, borderRadius: 16, alignItems: "center" },
  textoBotaoSecundario: { color: "#7C3AED", fontSize: 16, fontWeight: "600" },
});