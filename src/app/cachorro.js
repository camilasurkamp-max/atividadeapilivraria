import { useState, useEffect } from "react";
import { Button, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";


export default function Cachorro() {
    const [imagem, setImagem] = useState("");


    async function buscar() {
        const resposta = await fetch("https://dog.ceo/api/breeds/image/random");
        const dados = await resposta.json();
        setImagem(dados.message);
    }
    useEffect(() => {
        buscar();
    }, []);

    return (
        <SafeAreaView style={styles.tela} edges={["bottom"]}>
            <Stack.Screen options={{ title: "Cachorro" }} />
            {imagem ? (
                <Image source={{ uri: imagem }}
                    style={{ width: "100%", height: 320 }} />
            ) : null}
            <Button title="Outro cachorro" onPress={buscar} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    tela: { flex: 1, backgroundColor: "#FFFFFF", padding: 16, gap: 6 },
});