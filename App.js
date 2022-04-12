import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <StatusBar style="auto" />
      <View style={styles.box}>
        <Text>1번</Text>
      </View>
      <View style={styles.box}>
        <Text>2번</Text>
      </View>
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
  box: {
    backgroundColor: "yellow",
    fontSize: 30,
    marginBottom: 8,
    width: 100,
    height: 100,
  },
});
