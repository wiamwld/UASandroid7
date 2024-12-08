import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.welcomeText}>Selamat Datang,</Text>
      <Text style={styles.titleText}>ABSENSI KITA</Text>
      <Text style={styles.subtitleText}>
        Absensi Guru SMA Bustanul Mubtadiin Panguraian-Propopo-Pamekasan
      </Text>

      {/* Avatar */}
      <Image
        source={{ uri: "https://via.placeholder.com/100" }} // Ganti dengan URL gambar avatar
        style={styles.avatarImage}
      />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username ....................................."
          style={styles.input}
        />
        <TextInput
          placeholder="Password ....................................."
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008000", // Hijau sebagai latar belakang
    alignItems: "center",
    paddingTop: 60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  subtitleText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    marginTop: 10,
    marginHorizontal: 20,
  },
  avatarImage: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 30,
  },
  inputContainer: {
    width: "90%",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008000",
  },
});
