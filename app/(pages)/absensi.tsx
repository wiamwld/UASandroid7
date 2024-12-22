import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AbsensiScreen = () => {
  const userName = "WIAM WLD"; // Contoh nama dari akun
  const [status, setStatus] = useState("");
  const [alasanIzin, setAlasanIzin] = useState("");

  const handleAbsensi = () => {
    if (status === "") {
      Alert.alert("Peringatan", "Pilih status kehadiran Anda!");
    } else if (status === "Izin" && alasanIzin.trim() === "") {
      Alert.alert("Peringatan", "Masukkan alasan izin Anda!");
    } else {
      Alert.alert(
        "Berhasil",
        `Absensi berhasil!\nNama: ${userName}\nStatus: ${status}${
          status === "Izin" ? `\nAlasan: ${alasanIzin}` : ""
        }`
      );
      setStatus("");
      setAlasanIzin("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/Splash.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>E-Absensi Kita</Text>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Pilih status kehadiran Anda:</Text>
        <Text style={styles.userName}>{userName}</Text>

        {/* Pilihan Status Kehadiran */}
        <View style={styles.buttonGroup}>
          {["Hadir", "Izin", "Sakit"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.statusButton,
                status === option && styles.selectedButton,
              ]}
              onPress={() => setStatus(option)}
            >
              <Ionicons
                name={
                  option === "Hadir"
                    ? "checkmark-circle"
                    : option === "Izin"
                    ? "time"
                    : "medkit"
                }
                size={24}
                color={status === option ? "#fff" : "#555"}
              />
              <Text
                style={[
                  styles.statusText,
                  status === option && { color: "#fff" },
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Input Alasan Izin */}
        {status === "Izin" && (
          <TextInput
            style={styles.input}
            placeholder="Masukkan alasan izin"
            value={alasanIzin}
            onChangeText={setAlasanIzin}
          />
        )}

        {/* Tombol Simpan */}
        <TouchableOpacity style={styles.saveButton}
        onPress={() => {
                  router.push("/riwayat");
                }}
        >
          <Text style={styles.saveText}>ABSEN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1EB854",
    textAlign: "center",
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statusButton: {
    width: "30%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },
  selectedButton: {
    backgroundColor: "#1EB854",
    borderColor: "#1EB854",
  },
  statusText: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
  saveButton: {
    height: 50,
    backgroundColor: "#1EB854",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  saveText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AbsensiScreen;
