import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Generate() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create New Podcast</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter topic or title..."
          placeholderTextColor="#666"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter content or notes..."
          placeholderTextColor="#666"
          multiline
          numberOfLines={6}
        />
        <TouchableOpacity style={styles.generateButton}>
          <Ionicons name="mic" size={24} color="white" />
          <Text style={styles.generateButtonText}>Generate Podcast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: "white",
    fontSize: 16,
  },
  textArea: {
    height: 150,
    textAlignVertical: "top",
  },
  generateButton: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    gap: 10,
  },
  generateButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
}); 