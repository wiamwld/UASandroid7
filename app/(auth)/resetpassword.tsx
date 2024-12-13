import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router"; // Make sure to import the router

export default function CreateNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter(); // Initialize router

  const handleSavePassword = () => {
    if (password !== confirmPassword) {
      alert("Password tidak cocok.");
      return;
    }
    // Tambahkan logika untuk menyimpan password baru
    alert("Password berhasil diubah.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buat Password Baru</Text>
      <TextInput
        style={styles.input}
        placeholder="Password Baru"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Konfirmasi Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSavePassword}>
        <Text style={styles.buttonText}>Simpan Password</Text>
      </TouchableOpacity>

      {/* Back to Login Button */}
      <TouchableOpacity
        style={styles.backToLoginButton}
        onPress={() => {
          router.push("/(auth)/login");
        }}
      >
        <Text style={styles.backToLoginText}>Kembali ke Login</Text>
      </TouchableOpacity>
    </View>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
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
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
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
