import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="mic" size={32} color="white" />
        <Text style={styles.buttonText}>Generate Podcast</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
