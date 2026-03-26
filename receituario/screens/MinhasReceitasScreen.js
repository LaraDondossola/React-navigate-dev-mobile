import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";

function MinhasReceitasScreen({ minhasReceitas, setMinhasReceitas }) {
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novoTempo, setNovoTempo] = useState("");

  function adicionarReceita() {
    if (!novoTitulo.trim()) {
      Alert.alert("Atenção", "Digite o nome da receita!");
      return;
    }

    const nova = {
      id: Date.now().toString(),
      titulo: novoTitulo.trim(),
      tempo: novoTempo.trim() || "?",
      emoji: "🍴",
    };

    setMinhasReceitas([nova, ...minhasReceitas]);
    setNovoTitulo("");
    setNovoTempo("");
  }

  function removerReceita(id) {
    Alert.alert("Remover", "Deseja remover esta receita?", [
      { text: "Cancelar" },
      {
        text: "Remover",
        onPress: () =>
          setMinhasReceitas(minhasReceitas.filter((r) => r.id !== id)),
      },
    ]);
  }

  function renderReceita({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.cardEmoji}>{item.emoji}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardTempo}>⏱ {item.tempo}</Text>
        </View>
        <TouchableOpacity onPress={() => removerReceita(item.id)}>
          <Text style={styles.cardIcone}>🗑️</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Receitas</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome da receita..."
          value={novoTitulo}
          onChangeText={setNovoTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Tempo (ex: 30 min)"
          value={novoTempo}
          onChangeText={setNovoTempo}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarReceita}>
          <Text style={styles.botaoTexto}>+ Compartilhar Receita</Text>
        </TouchableOpacity>
      </View>

      {minhasReceitas.length === 0 ? (
        <View style={styles.containerVazio}>
          <Text style={styles.emptyEmoji}>🍴</Text>
          <Text style={styles.emptyTexto}>Nenhuma receita compartilhada.</Text>
        </View>
      ) : (
        <FlatList
          data={minhasReceitas}
          keyExtractor={(item) => item.id}
          renderItem={renderReceita}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  containerVazio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  form: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    fontSize: 14,
    backgroundColor: "#fafafa",
  },
  botao: {
    backgroundColor: "#e07b39",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fdf3ec",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  cardEmoji: {
    fontSize: 28,
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  cardTempo: {
    fontSize: 13,
    color: "#888",
    marginTop: 2,
  },
  cardIcone: {
    fontSize: 20,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  emptyTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
});

export default MinhasReceitasScreen;