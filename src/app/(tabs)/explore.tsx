import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TabTwoScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вторая вкладка</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("my")}
      >
        <Text style={styles.buttonText}>Перейти </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#75868b",
    padding: 15,
    borderRadius: 11,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});