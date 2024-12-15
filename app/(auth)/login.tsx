import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Harap isi semua kolom.");
      return;
    }
    alert(`Login berhasil untuk: ${email}`);
    router.push("/dashboard"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("@/assets/images/Splash.png")} style={styles.logo} />
      <Text style={styles.welcomeText}>Selamat Datang</Text>
      <Text style={styles.title}>E-ABSENSI KITA</Text>

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Input Password */}
      <TextInput
        style={styles.input}
        placeholder="Kata Sandi"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>MASUK</Text>
      </TouchableOpacity>

      {/* Navigation to Register */}
      <Text style={styles.registerText}>
        Belum punya akun?{" "}
        <Text
          style={styles.linkText}
          onPress={() => router.replace("/(auth)/register")}
        >
          <Text style={styles.boldText}>Daftar</Text>
        </Text>
      </Text>

      {/* Navigation to Forgot Password */}
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/lupapassword")}
      >
        <Text style={styles.forgotPasswordText}>
          <Text style={styles.boldText}>Lupa Password?</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1EB854",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    tintColor: "#fff", // Membuat logo berwarna putih
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  input: {
    width: "90%", // Diperkecil dari "100%"
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
  },
  loginButton: {
    width: "90%", // Diperkecil dari "100%"
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1EB854",
  },
  registerText: {
    marginTop: 20,
    color: "#fff",
  },
  linkText: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  forgotPasswordText: {
    marginTop: 10,
    color: "#fff",
    textDecorationLine: "underline",
  },
  boldText: {
    fontWeight: "bold",
  },
});
