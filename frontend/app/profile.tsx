import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person-circle" size={80} color="white" />
        </View>
        <Text style={styles.username}>User Name</Text>
        <Text style={styles.email}>user@example.com</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color="white" />
          <Text style={styles.menuText}>Settings</Text>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="headset-outline" size={24} color="white" />
          <Text style={styles.menuText}>My Podcasts</Text>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="heart-outline" size={24} color="white" />
          <Text style={styles.menuText}>Favorites</Text>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  username: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    color: "#666",
    fontSize: 16,
  },
  section: {
    backgroundColor: "#333",
    borderRadius: 10,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  menuText: {
    color: "white",
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
}); 