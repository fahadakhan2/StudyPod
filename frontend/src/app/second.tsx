import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SecondPage() {
  return (
    <View style = {styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>2nd Screen</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href={"/third"}>Push to Third</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "violet"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
