import { useState } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedScreen from "./screens/FeedScreen";
import FavoritosScreen from "./screens/FavoritosScreen";
import MinhasReceitasScreen from "./screens/MinhasReceitasScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [minhasReceitas, setMinhasReceitas] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#e07b39",
          tabBarInactiveTintColor: "#999",
          headerStyle: { backgroundColor: "#e07b39" },
          headerTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Feed"
          options={{
            title: "Receitas",
            tabBarLabel: "Feed",
            tabBarIcon: () => <Text>🍽️</Text>,
          }}
        >
          {() => (
            <FeedScreen
              favoritos={favoritos}
              setFavoritos={setFavoritos}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Favoritos"
          options={{
            title: "Favoritos",
            tabBarLabel: "Favoritos",
            tabBarIcon: () => <Text>❤️</Text>,
          }}
        >
          {() => (
            <FavoritosScreen
              favoritos={favoritos}
              setFavoritos={setFavoritos}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="MinhasReceitas"
          options={{
            title: "Minhas Receitas",
            tabBarLabel: "Minhas",
            tabBarIcon: () => <Text>👨‍🍳</Text>,
          }}
        >
          {() => (
            <MinhasReceitasScreen
              minhasReceitas={minhasReceitas}
              setMinhasReceitas={setMinhasReceitas}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}