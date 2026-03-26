import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

function FavoritosScreen({ favoritos, setFavoritos }) {

  function removerFavorito(id) {
    setFavoritos(favoritos.filter((f) => f.id !== id));
  }

  function renderFavorito({ item }) {
    return (
      <View style={styles.card}>
        <Text style={styles.cardEmoji}>{item.emoji}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardTempo}>⏱ {item.tempo}</Text>
        </View>
        <TouchableOpacity onPress={() => removerFavorito(item.id)}>
          <Text style={styles.cardIcone}>❌</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (favoritos.length === 0) {
    return (
      <View style={styles.containerVazio}>
        <Text style={styles.emptyEmoji}>🤍</Text>
        <Text style={styles.emptyTexto}>Nenhum favorito ainda.</Text>
        <Text style={styles.emptySubtexto}>Toque no coração nas receitas do Feed!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Favoritos</Text>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id}
        renderItem={renderFavorito}
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
  containerVazio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
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
  emptySubtexto: {
    fontSize: 13,
    color: "#aaa",
    marginTop: 4,
  },
});

export default FavoritosScreen;