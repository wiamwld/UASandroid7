import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [nip, setNip] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = () => {
    if (!fullName || !nip || !email || !password || !confirmPassword) {
      alert("Harap isi semua kolom.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Harap masukkan email yang valid.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Kata sandi dan konfirmasi kata sandi tidak cocok.");
      return;
    }
    // Tambahkan logika pendaftaran di sini (misalnya, API call untuk register)
    alert(`Pendaftaran berhasil untuk: ${fullName}`);
    router.push("/dashboard");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>Selamat Datang,</Text>
      <Text style={styles.title}>E-ABSENSI KITA</Text>
      <Text style={styles.subtitle}>Daftar untuk membuat akun baru</Text>

      {/* Input Nama Lengkap */}
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        placeholderTextColor="#B0B0B0"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Input NIP */}
      <TextInput
        style={styles.input}
        placeholder="NIP"
        placeholderTextColor="#B0B0B0"
        keyboardType="numeric"
        value={nip}
        onChangeText={setNip}
      />

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

      {/* Input Konfirmasi Kata Sandi */}
      <TextInput
        style={styles.input}
        placeholder="Konfirmasi Kata Sandi"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>DAFTAR</Text>
      </TouchableOpacity>

      {/* Back to Login */}
      <TouchableOpacity
        style={styles.backToLoginButton}
        onPress={() => {
          router.push("/(auth)/login");
        }}
      >
        <Text style={styles.backToLoginText}>Kembali ke Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1EB854",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1EB854",
  },
  backToLoginButton: {
    marginTop: 20,
  },
  backToLoginText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    textDecorationLine: "underline",
  },
});
