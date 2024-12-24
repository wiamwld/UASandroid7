import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DataGuruScreen = ({ navigation }) => {
  const [dataGuru, setDataGuru] = useState([
    {
      id: "1",
      nama: "Bapak Agus",
      alamat: "Jl. Sudirman No. 12",
      nidn: "123456",
      mataPelajaran: "Matematika",
      noTelepon: "081234567890",
      foto: require("@/assets/images/Guru.png"),
    },
    {
      id: "2",
      nama: "Ibu Siti",
      alamat: "Jl. Merdeka No. 45",
      nidn: "654321",
      mataPelajaran: "Bahasa Indonesia",
      noTelepon: "081234567891",
      foto: require("@/assets/images/Splash.png"),
    },
    {
      id: "3",
      nama: "Bapak Rahmat",
      alamat: "Jl. Melati No. 33",
      nidn: "112233",
      mataPelajaran: "Biologi",
      noTelepon: "081234567892",
      foto: require("@/assets/images/Splash.png"),
    },
    {
      id: "4",
      nama: "Ibu Dian",
      alamat: "Jl. Anggrek No. 20",
      nidn: "445566",
      mataPelajaran: "Fisika",
      noTelepon: "081234567893",
      foto: require("@/assets/images/Splash.png"),
    },
    {
      id: "5",
      nama: "Bapak Joko",
      alamat: "Jl. Kenanga No. 8",
      nidn: "778899",
      mataPelajaran: "Sejarah",
      noTelepon: "081234567894",
      foto: require("@/assets/images/Splash.png"),
    },
  ]);

  const renderGuru = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={item.foto} style={styles.foto} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nama}>{item.nama}</Text>
        <Text style={styles.info}>Alamat: {item.alamat}</Text>
        <Text style={styles.info}>NIDN: {item.nidn}</Text>
        <Text style={styles.info}>Mata Pelajaran: {item.mataPelajaran}</Text>
        <Text style={styles.info}>No. Telepon: {item.noTelepon}</Text>
      </View>
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
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  foto: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  nama: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: "#555",
  },
});

export default DataGuruScreen;
