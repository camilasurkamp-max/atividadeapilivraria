import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";


export default function Pokemon() {
    const [nome, setNome] = useState("");
    const [pokemon, setPokemon] = useState({});
    const [erro, setErro] = useState("");
    async function buscar() {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}/`
        );
        if (resposta.status === 404) {
            setErro("Pokémon não encontrado.");
            setPokemon({});
        } else {
            const dados = await resposta.json();
            setErro("");
            setPokemon(dados);
        }
    }
    return (
        <SafeAreaView style={styles.tela}
            edges={["bottom"]}>

            <Stack.Screen options={{ title: "Buscar Pokémon" }} />

            <TextInput style={styles.campo} value={nome}
                onChangeText={setNome} placeholder="Nome do Pokémon" />

            <Button title="Buscar" onPress={buscar} />
            <Text style={styles.erro}>{erro}</Text>
            {pokemon.sprites && (
                <Image source={{ uri: pokemon.sprites.front_default }}
                    style={{ width: 150, height: 150 }} />

            )}
            <Text style={styles.titulo}>{pokemon.name}</Text>
            <Text>Altura: {pokemon.height}</Text>
            <Text>Peso: {pokemon.weight}</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

    tela:
    {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 16,
        gap: 6
    },

    campo: {
        borderWidth: 1,
        borderColor: "#D9DDE3",
        borderRadius: 12,
        padding: 12,
        fontSize: 16,
        marginBottom: 6
    },

    erro:
    {
        marginTop: 16,
        color: "#B91C1C"
    },

    titulo:

    {
        fontSize: 16,
        fontWeight: "600"
    },
});