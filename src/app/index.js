
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TelaInicial() {
  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Página do Aluno" }} />

      <ScrollView contentContainerStyle={styles.conteudo}>

        {/* CABEÇALHO */}
       <View style={styles.cabecalho}>
  <View style={styles.avatar} />

  <View style={styles.informacoes}>
    <Text style={styles.titulo}>Olá, Estudante</Text>
    <Text style={styles.subtitulo}>Bem-vindo de volta</Text>
  </View>
</View>

        {/* ATIVIDADES */}
        <Text style={styles.secao}>Minhas atividades</Text>

        <Pressable
          style={styles.cartao}
          onPress={() => router.push("/contatos")}
        >
          <Text style={styles.numero}>01</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Agenda de Contatos</Text>
            <Text style={styles.detalhe}>Gerenciar contatos</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.cartao}
          onPress={() => router.push("/biblioteca")}
        >
          <Text style={styles.numero}>02</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Biblioteca Pessoal</Text>
            <Text style={styles.detalhe}>Lista de livros</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.cartao}
          onPress={() => router.push("/compras")}
        >
          <Text style={styles.numero}>03</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Lista de Compras</Text>
            <Text style={styles.detalhe}>Organizar compras</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.cartao}
          onPress={() => router.push("/filmes")}
        >
          <Text style={styles.numero}>04</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Avaliação de Filmes</Text>
            <Text style={styles.detalhe}>Lista de filmes</Text>
          </View>
        </Pressable>

         <Pressable
          style={styles.cartao}
          onPress={() => router.push("/contador")}
        >
          <Text style={styles.numero}>05</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Abrir contador</Text>
            <Text style={styles.detalhe}>contador</Text>
          </View>
        </Pressable>


        <Pressable
          style={styles.cartao}
          onPress={() => router.push("/flores")}
        >
          <Text style={styles.numero}>06</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Lista de flores</Text>
            <Text style={styles.detalhe}>Gerenciar flores</Text>
          </View>
        </Pressable>


<Pressable
          style={styles.cartao}
          onPress={() => router.push("/listamusicas")}
        >
          <Text style={styles.numero}>07</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Lista de músicas</Text>
            <Text style={styles.detalhe}>Músicas</Text>
          </View>
        </Pressable>




        {/* ATIVIDADES COM API */}
        <Text style={styles.secao}>Atividades com API</Text>

        <Pressable
          style={styles.cartao}
          onPress={() => router.push("/cachorro")}
        >
          <Text style={styles.numero}>08</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Buscar Cachorros</Text>
            <Text style={styles.detalhe}>Fotos de cachorros</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.cartao}
          onPress={() => router.push("/cnpj")}
        >
          <Text style={styles.numero}>09</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Buscar CNPJ</Text>
            <Text style={styles.detalhe}>Consultar empresas</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.cartao}
          onPress={() => router.push("/cep")}
        >
          <Text style={styles.numero}>10</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Buscar CEP</Text>
            <Text style={styles.detalhe}>Consultar endereços</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.cartao}
          onPress={() => router.push("/pokemon")}
        >
          <Text style={styles.numero}>11</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Buscar Pokémon</Text>
            <Text style={styles.detalhe}>Informações de Pokémon</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.cartao}
          onPress={() => router.push("/bordeis")}
        >
          <Text style={styles.numero}>12</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Buscar Bordeis</Text>
            <Text style={styles.detalhe}>Cadastro usando MockAPI</Text>
          </View>
        </Pressable>


         <Pressable
          style={styles.cartao}
          onPress={() => router.push("/livraria")}
        >
          <Text style={styles.numero}>13</Text>
          <View style={styles.informacoes}>
            <Text style={styles.cartaoTitulo}>Buscar Livraria</Text>
            <Text style={styles.detalhe}>Cadastro usando MockAPI</Text>
          </View>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  conteudo: {
    padding: 16,
    paddingBottom: 30,
  },

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
    marginTop: 10,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#D9DDE3",
  },

  titulo: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitulo: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  secao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 14,
    marginTop: 12,
  },

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 0,
    padding: 18,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  numero: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2354D6",
  },

  informacoes: {
    flex: 1,
  },

  cartaoTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  detalhe: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },
});
