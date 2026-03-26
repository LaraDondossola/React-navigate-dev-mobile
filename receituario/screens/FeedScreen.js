import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import RECEITAS_SUGERIDAS from "../data/receitas";

function FeedScreen({ favoritos, setFavoritos }) {

  function toggleFavorito(receita) {
    const jaFavoritado = favoritos.some((f) => f.id === receita.id);
    if (jaFavoritado) {
      setFavoritos(favoritos.filter((f) => f.id !== receita.id));
    } else {
      setFavoritos([...favoritos, receita]);
    }
  }

  function renderReceita({ item }) {
    const favoritado = favoritos.some((f) => f.id === item.id);
    return (
      <View style={styles.card}>
        <Text style={styles.cardEmoji}>{item.emoji}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardTempo}>⏱ {item.tempo}</Text>
        </View>
        <TouchableOpacity onPress={() => toggleFavorito(item)}>
          <Text style={styles.cardCoracao}>{favoritado ? "❤️" : "🤍"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Receitas Sugeridas</Text>
      <FlatList
        data={RECEITAS_SUGERIDAS}
        keyExtractor={(item) => item.id}
        renderItem={renderReceita}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
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
  cardCoracao: {
    fontSize: 22,
  },
});

export default FeedScreen;