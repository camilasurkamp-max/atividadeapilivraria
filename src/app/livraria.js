
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import * as SQLite from "expo-sqlite";

// Componente principal do aplicativo.
export default function Livraria() {

  // Armazena a lista de livros cadastrados.
  const [livros, setLivros] = useState([]);

  // Armazena as informações digitadas nos campos.
  const [tituloLivro, setTituloLivro] = useState("");
  const [autorLivro, setAutorLivro] = useState("");
  const [generoLivro, setGeneroLivro] = useState("");
  const [paginasLivro, setPaginasLivro] = useState("");
  const [adaptacao, setAdaptacao] = useState("");

  // Busca os livros cadastrados no MockAPI.
  // GET é utilizado para consultar os dados.
  async function buscarLivros() {
    const resposta = await fetch(
      "https://6aededada677fe0fc14fa462.mockapi.io/livros",
    );

    // Converte a resposta da API para JSON.
    const dados = await resposta.json();

    // Atualiza a lista de livros na tela.
    setLivros(dados);
  }

  // Salva um novo livro no MockAPI.
  // POST é utilizado para enviar os dados.
  async function salvarLivro() {
    await fetch("https://6aededada677fe0fc14fa462.mockapi.io/livros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      // Organiza os dados do livro em JSON.
      body: JSON.stringify({
        titulo: tituloLivro,
        autor: autorLivro,
        genero: generoLivro,
        paginas: Number(paginasLivro),
        adaptacao: adaptacao.toLowerCase() === "sim",
      }),
    });

    // Limpa os campos após salvar o livro.
    setTituloLivro("");
    setAutorLivro("");
    setGeneroLivro("");
    setPaginasLivro("");
    setAdaptacao("");

    // Atualiza a lista com o livro cadastrado.
    buscarLivros();
  }

  // Executa a busca quando o aplicativo é aberto.
  useEffect(() => {
    buscarLivros();
  }, []);

  // Início da interface do aplicativo.
  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>

      {/* Título exibido na parte superior. */}
      <Stack.Screen options={{ title: "Minha Livraria" }} />

      {/* Campo para informar o título do livro. */}
      <TextInput
        style={styles.campo}
        value={tituloLivro}
        onChangeText={setTituloLivro}
        placeholder="Título do livro"
      />

      {/* Campo para informar o autor ou a autora. */}
      <TextInput
        style={styles.campo}
        value={autorLivro}
        onChangeText={setAutorLivro}
        placeholder="Autor ou autora"
      />

      {/* Campo para informar o gênero do livro. */}
      <TextInput
        style={styles.campo}
        value={generoLivro}
        onChangeText={setGeneroLivro}
        placeholder="Gênero do livro"
      />

      {/* Campo para informar o número de páginas. */}
      <TextInput
        style={styles.campo}
        value={paginasLivro}
        onChangeText={setPaginasLivro}
        keyboardType="numeric"
        placeholder="Número de páginas"
      />

      {/* Campo para informar se possui adaptação. */}
      <TextInput
        style={styles.campo}
        value={adaptacao}
        onChangeText={setAdaptacao}
        placeholder="Possui adaptação? Sim ou Não"
      />

      {/* Botão que executa a função salvarLivro. */}
      <Button title="Salvar livro" onPress={salvarLivro} />

      {/* Exibe os livros cadastrados na API. */}
      <FlatList
        style={styles.lista}
        data={livros}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.id} - {item.titulo} - {item.autor}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

// Define a aparência dos componentes.
const styles = StyleSheet.create({

  // Estilo geral da tela.
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  // Estilo dos campos de preenchimento.
  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    padding: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 12,
  },

  // Estilo da lista de livros.
  lista: {
    flex: 1,
    marginTop: 16,
  },

  // Estilo das informações de cada livro.
  item: {
    backgroundColor: "#F1F3F6",

    padding: 16,
    marginBottom: 8,
    fontSize: 15,
    color: "#111827",
  },
});
