import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const AbsensiScreen = () => {
  const [status, setStatus] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const handleSubmit = () => {
    if (!status) {
      Alert.alert("Peringatan", "Harap pilih status kehadiran!");
      return;
    }
    // Simulasi pengiriman data absensi
    Alert.alert(
      "Absensi Terkirim",
      `Status: ${status}\nKeterangan: ${keterangan}`
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Absensi Harian</Text>
      </View>

      {/* Form Absensi */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Status Kehadiran</Text>
        <View style={styles.statusContainer}>
          <TouchableOpacity
            style={[
              styles.statusButton,
              status === "Hadir" && styles.selectedStatus,
            ]}
            onPress={() => setStatus("Hadir")}
          >
            <Text style={styles.statusText}>Hadir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.statusButton,
              status === "Sakit" && styles.selectedStatus,
            ]}
            onPress={() => setStatus("Sakit")}
          >
            <Text style={styles.statusText}>Sakit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.statusButton,
              status === "Izin" && styles.selectedStatus,
            ]}
            onPress={() => setStatus("Izin")}
          >
            <Text style={styles.statusText}>Izin</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Keterangan (Opsional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan keterangan jika perlu"
          value={keterangan}
          onChangeText={setKeterangan}
        />

        {/* Tombol Kirim Absensi */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Kirim Absensi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    backgroundColor: "#1EB854",
    padding: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  formContainer: {
    padding: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statusButton: {
    backgroundColor: "#f4f4f4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedStatus: {
    backgroundColor: "#1EB854",
    borderColor: "#1EB854",
  },
  statusText: {
    color: "#555",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#1EB854",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AbsensiScreen;
