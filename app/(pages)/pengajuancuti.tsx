// Import library React Native
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const PengajuanCuti = () => {
  // State untuk form
  const [namaGuru, setNamaGuru] = useState("");
  const [tanggalMulai, setTanggalMulai] = useState("");
  const [tanggalSelesai, setTanggalSelesai] = useState("");
  const [alasan, setAlasan] = useState("");

  // Fungsi untuk submit data
  const handleSubmit = () => {
    if (!namaGuru || !tanggalMulai || !tanggalSelesai || !alasan) {
      Alert.alert("Error", "Semua field harus diisi.");
      return;
    }

    // Data yang akan dikirim
    const data = {
      namaGuru,
      tanggalMulai,
      tanggalSelesai,
      alasan,
    };

    // Simulasi pengiriman data ke server (POST request)
    fetch("https://api-absensi.example.com/pengajuan-cuti", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          Alert.alert("Berhasil", "Pengajuan cuti berhasil dikirim.");
          // Reset form
          setNamaGuru("");
          setTanggalMulai("");
          setTanggalSelesai("");
          setAlasan("");
        } else {
          Alert.alert("Gagal", "Terjadi kesalahan, silakan coba lagi.");
        }
      })
      .catch((error) => {
        Alert.alert("Error", "Tidak dapat terhubung ke server.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Pengajuan Cuti</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Guru"
        value={namaGuru}
        onChangeText={setNamaGuru}
      />

      <TextInput
        style={styles.input}
        placeholder="Tanggal Mulai (YYYY-MM-DD)"
        value={tanggalMulai}
        onChangeText={setTanggalMulai}
      />

      <TextInput
        style={styles.input}
        placeholder="Tanggal Selesai (YYYY-MM-DD)"
        value={tanggalSelesai}
        onChangeText={setTanggalSelesai}
      />

      <TextInput
        style={styles.textarea}
        placeholder="Alasan Cuti"
        value={alasan}
        onChangeText={setAlasan}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Ajukan Cuti</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4CAF50",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  textarea: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PengajuanCuti;
