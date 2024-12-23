import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const RiwayatKehadiranScreen = () => {
  // Contoh data riwayat absensi
  const [riwayat, setRiwayat] = useState([
    {
      id: "1",
      nama: "WIAM WLD",
      status: "Hadir",
      waktu: "21 Desember 2024, 07:45",
      alasan: "",
    },
    {
      id: "2",
      nama: "WIAM WLD",
      status: "Izin",
      waktu: "20 Desember 2024, 08:10",
      alasan: "Menghadiri acara keluarga",
    },
    {
      id: "3",
      nama: "WIAM WLD",
      status: "Sakit",
      waktu: "19 Desember 2024, 08:00",
      alasan: "",
    },
    {
      id: "4",
      nama: "WIAM WLD",
      status: "Hadir",
      waktu: "18 Desember 2024, 07:45",
      alasan: "",
    },
    {
      id: "5",
      nama: "WIAM WLD",
      status: "Hadir",
      waktu: "17 Desember 2024, 07:45",
      alasan: "",
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.nama}</Text>
      <Text style={styles.detail}>
        Status: <Text style={styles.status}>{item.status}</Text>
      </Text>
      <Text style={styles.detail}>Waktu: {item.waktu}</Text>
      {item.status === "Izin" && (
        <Text style={styles.detail}>Alasan: {item.alasan}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
          router.push("/dashboard");
          }}
        >
          <Ionicons name="chevron-back" size={28} color="#1EB854" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Riwayat Kehadiran</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={riwayat}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1EB854",
    textAlign: "center",
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  status: {
    fontWeight: "bold",
    color: "#1EB854",
  },
  backButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default RiwayatKehadiranScreen;
