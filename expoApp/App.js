import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function App() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //IIFE
    (async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await resp.json();
      setData(json);
      console.log(counter);
    })();
    return () => {
      console.log("cleanup");
    };
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salam Donya 💃 {counter}</Text>
      <Button onPress={() => setCounter(counter + 1)} title="+"></Button>
      <Text style={styles.title}>{data.length}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      {/* <Image style={styles.tinyLogo} source={require("assets/icon.png")} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
