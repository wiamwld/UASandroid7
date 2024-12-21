import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

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
      <Text style={styles.title}>Form Absensi</Text>

      {/* Nama Pengguna */}
      <Text style={styles.userName}>Nama: {userName}</Text>

      {/* Pilihan Status Kehadiran */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.statusButton,
            status === "Hadir" && styles.selectedButton,
          ]}
          onPress={() => setStatus("Hadir")}
        >
          <Text style={styles.statusText}>Hadir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.statusButton,
            status === "Izin" && styles.selectedButton,
          ]}
          onPress={() => setStatus("Izin")}
        >
          <Text style={styles.statusText}>Izin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.statusButton,
            status === "Sakit" && styles.selectedButton,
          ]}
          onPress={() => setStatus("Sakit")}
        >
          <Text style={styles.statusText}>Sakit</Text>
        </TouchableOpacity>
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
      router.push ("/riwayat");          
      }}
      >
        <Text style={styles.saveText}>ABSEN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1EB854",
    textAlign: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statusButton: {
    width: "30%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  selectedButton: {
    backgroundColor: "#1EB854",
    borderColor: "#1EB854",
  },
  statusText: {
    fontSize: 16,
    color: "#555",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
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
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AbsensiScreen;
