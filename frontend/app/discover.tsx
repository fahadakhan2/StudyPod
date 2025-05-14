import { View, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Discover() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search podcasts..."
          placeholderTextColor="#666"
        />
      </View>
      <Text style={styles.placeholderText}>Discover trending podcasts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "white",
    fontSize: 16,
  },
  placeholderText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
}); 