import {
  DancingScript_400Regular,
  useFonts,
} from "@expo-google-fonts/dancing-script";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    DancingScript_400Regular,
  });

  const scale = useRef(new Animated.Value(1)).current;
  const fade = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.05,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  if (!fontsLoaded) return null;

  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient colors={["#6c7680", "#a8dbdb"]} style={styles.container}>
      <Animated.View style={{ opacity: fade, alignItems: "center" }}>
        <Image
          source={require("../../assets/images/myphoto.jpeg")}
          style={[styles.avatar, { transform: [{ scale: pulse }] }]}
        />

        <Text style={styles.name}>Makhmudbek</Text>

        <Text style={styles.course}>React Native • Expo</Text>

        <Text style={styles.bio}>
          Будущий мобильный разработчик. Изучаю React Native и создаю крутые
          приложения 🚀
        </Text>

        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity
            onPress={() => alert("Спасибо за просмотр")}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <LinearGradient
              colors={["#1630c5", "#3b82f6"]}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>View Profile</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.interests}>
          <Text style={styles.interestText}>☕ Coffee Lover</Text>
          <Text style={styles.interestText}>📖 Quran Read</Text>
          <Text style={styles.interestText}>⚽ Football Fan</Text>
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#62a1ca",
    marginBottom: 20,
  },

  name: {
    fontSize: 32,
    fontFamily: "DancingScript_400Regular",
    color: "#333",
  },

  course: {
    fontSize: 18,
    color: "#444",
    marginTop: 4,
    fontFamily: "DancingScript_400Regular",
  },

  bio: {
    textAlign: "center",
    color: "#666",
    marginVertical: 20,
    fontSize: 16,
    fontFamily: "DancingScript_400Regular",
  },

  buttonGradient: {
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  interests: {
    marginTop: 20,
    alignItems: "center",
  },

  interestText: {
    fontSize: 16,
    color: "#6d4cff",
    marginVertical: 2,
    fontFamily: "DancingScript_400Regular",
  },
});