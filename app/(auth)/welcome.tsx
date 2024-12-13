import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const WelcomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  let welcome = () => {
    router.push("/(auth)/login");
  };

  let loading = () => {
    setIsLoading(true);
    setTimeout(welcome, 3000);
  };

  useEffect(() => {
    setTimeout(loading, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View style={styles.body}>
        <Image
          source={require("@/assets/images/Splash.png")}
          style={styles.imageBody}
        />
        <Text style={styles.textImage}>E-ABSENSI KITA</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? <ActivityIndicator size={40} color={"#1EB854"} /> : null}
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
    backgroundColor: "#fff",
  },

  body: {
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBody: {
    height: 150, // Diperbesar
    width: 150, // Diperbesar
  },
  textImage: {
    fontSize: 24, // Diperbesar
    fontWeight: "bold", // Dipertebal
    color: "#1EB854",
  },
  footer: {
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  textIndicator: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1EB854",
  },
  textFooter: {
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    color: "#1EB854",
  },
});
