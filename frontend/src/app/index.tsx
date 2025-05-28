import "@/global.css"

import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/Button";

export default function Page() {

  const router = useRouter();

  return (

    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href={"/auth/login"}>Link to LogIn</Link>
        <Link href = {"/second"} push asChild>
        <Button title ="push to Second"></Button>
        </Link>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
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
