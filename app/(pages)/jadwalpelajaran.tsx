import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const JadwalPelajaranScreen = ({ navigation }) => {
  const [jadwal, setJadwal] = useState([
    {
      id: "1",
      hari: "Senin",
      mataPelajaran: [
        { nama: "Matematika", waktu: "07:00 - 08:30" },
        { nama: "Bahasa Indonesia", waktu: "08:45 - 10:15" },
        { nama: "Biologi", waktu: "10:30 - 12:00" },
      ],
    },
    {
      id: "2",
      hari: "Selasa",
      mataPelajaran: [
        { nama: "Fisika", waktu: "07:00 - 08:30" },
        { nama: "Kimia", waktu: "08:45 - 10:15" },
        { nama: "Sejarah", waktu: "10:30 - 12:00" },
      ],
    },
    {
      id: "3",
      hari: "Rabu",
      mataPelajaran: [
        { nama: "Geografi", waktu: "07:00 - 08:30" },
        { nama: "Ekonomi", waktu: "08:45 - 10:15" },
        { nama: "Seni Budaya", waktu: "10:30 - 12:00" },
      ],
    },
    {
      id: "4",
      hari: "Kamis",
      mataPelajaran: [
        { nama: "Matematika", waktu: "07:00 - 08:30" },
        { nama: "Bahasa Inggris", waktu: "08:45 - 10:15" },
        { nama: "Biologi", waktu: "10:30 - 12:00" },
      ],
    },
    {
      id: "5",
      hari: "Jumat",
      mataPelajaran: [
        { nama: "PKN", waktu: "07:00 - 08:30" },
        { nama: "Agama", waktu: "08:45 - 10:15" },
        { nama: "Olahraga", waktu: "10:30 - 12:00" },
      ],
    },
    {
      id: "6",
      hari: "Sabtu",
      mataPelajaran: [
        { nama: "Bahasa Indonesia", waktu: "07:00 - 08:30" },
        { nama: "Kesenian", waktu: "08:45 - 10:15" },
        { nama: "Prakarya", waktu: "10:30 - 12:00" },
      ],
    },
  ]);

  const renderJadwal = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.hari}>{item.hari}</Text>
      {item.mataPelajaran.map((mapel, index) => (
        <Text key={index} style={styles.mapel}>
          {mapel.nama} ({mapel.waktu})
        </Text>
      ))}
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
      <Text style={styles.title}>Jadwal Pelajaran</Text>

      {/* Daftar Jadwal */}
      <FlatList
        data={jadwal}
        keyExtractor={(item) => item.id}
        renderItem={renderJadwal}
        numColumns={2}
        columnWrapperStyle={styles.row}
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
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    flex: 1,
    backgroundColor: "#1EB854",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 3,
  },
  hari: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  mapel: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
});

export default JadwalPelajaranScreen;
