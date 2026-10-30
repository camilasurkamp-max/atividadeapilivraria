import { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
export default function Cnpj() {
    const [cnpj, setCnpj] = useState("");
    const [empresa, setEmpresa] = useState({});
    const [erro, setErro] = useState("");
    async function buscar() {
        const resposta = await fetch(
            `https://www.receitaws.com.br/v1/cnpj/${cnpj}`
        );
        const dados = await resposta.json();
        if (dados.status === "ERROR") {
            setErro(dados.message);
            setEmpresa({});
        } else {
            setErro("");
            setEmpresa(dados);
        }
    }
    return (
        <SafeAreaView style={styles.tela} edges={["bottom"]}>
            <Stack.Screen options={{ title: "Buscar CNPJ" }} />
            <TextInput style={styles.campo} value={cnpj}
                onChangeText={setCnpj} keyboardType="numeric"

                placeholder="Digite o CNPJ, só números" />
            <Button title="Buscar" onPress={buscar} />
            <Text style={styles.erro}>{erro}</Text>
            <Text style={styles.titulo}>{empresa.razao_social}</Text>
            <Text>{empresa.fantasia}</Text>
            <Text>{empresa.municipio}</Text>
            <Text>{empresa.uf}</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    tela: { flex: 1, backgroundColor: "#FFFFFF", padding: 16, gap: 6 },
    campo: {
        borderWidth: 1, borderColor: "#D9DDE3", borderRadius: 12,
        padding: 12, fontSize: 16, marginBottom: 6
    },
    erro: { marginTop: 16, color: "#B91C1C" },
    titulo: { fontSize: 16, fontWeight: "600" },
});