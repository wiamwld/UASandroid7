import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DataGuruScreen = ({ navigation }) => {
  const [dataGuru, setDataGuru] = useState([
    {
      id: "1",
      nama: "Bapak Agus",
      mataPelajaran: "Matematika",
      noTelepon: "081234567890",
    },
    {
      id: "2",
      nama: "Ibu Siti",
      mataPelajaran: "Bahasa Indonesia",
      noTelepon: "081234567891",
    },
    {
      id: "3",
      nama: "Bapak Rahmat",
      mataPelajaran: "Biologi",
      noTelepon: "081234567892",
    },
    {
      id: "4",
      nama: "Ibu Dian",
      mataPelajaran: "Fisika",
      noTelepon: "081234567893",
    },
    {
      id: "5",
      nama: "Bapak Joko",
      mataPelajaran: "Sejarah",
      noTelepon: "081234567894",
    },
  ]);

  const renderGuru = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.info}>Mata Pelajaran: {item.mataPelajaran}</Text>
      <Text style={styles.info}>No. Telepon: {item.noTelepon}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="#1EB854" />
      </TouchableOpacity>

      {/* Judul */}
      <Text style={styles.title}>Data Guru</Text>

      {/* Daftar Data Guru */}
      <FlatList
        data={dataGuru}
        keyExtractor={(item) => item.id}
        renderItem={renderGuru}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1EB854",
    textAlign: "center",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#1EB854",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  nama: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: "#fff",
  },
});

export default DataGuruScreen;
