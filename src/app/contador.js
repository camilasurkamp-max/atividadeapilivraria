import { Stack } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contador() {
  const [contador, setContador] = useState(0);

  function adicionar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen
        options={{
          title: "prova",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white",
        }}
      />

      <View style={styles.caixa}>
        <Text style={styles.titulo}>Contador</Text>

        <Text style={styles.numero}>{contador}</Text>

        <View style={styles.botoes}>
          <Button title="+" onPress={adicionar} color="blue" />
          <Button title="-" onPress={diminuir} color="blue" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  caixa: {
    backgroundColor: "silver",
    borderRadius: 12,
    padding: 16,
    height: 280,
  },

  titulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },

  numero: {
    fontSize: 40,
    color: "blue",
    margin: 32,
  },

  botoes: {
    marginTop: "auto",
    gap: 8,
  },
});