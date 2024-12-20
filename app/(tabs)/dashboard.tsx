import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const userName = "Bapak/Ibu Guru"; // Contoh nama dinamis

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Absensi Guru</Text>
        <Text style={styles.subHeaderText}>Selamat Datang, {userName}</Text>
      </View>

      {/* Menu Cards */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate("Absensi")}
        >
          <FontAwesome name="check-circle" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Absensi Harian</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate("Riwayat")}
        >
          <FontAwesome name="calendar" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Riwayat Kehadiran</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate("Izin")}
        >
          <FontAwesome name="file-text" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Pengajuan Izin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate("Laporan")}
        >
          <FontAwesome name="bar-chart" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Laporan Kehadiran</Text>
        </TouchableOpacity>

        {/* New Features */}
        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate("JadwalPelajaran")}
        >
          <MaterialIcons name="schedule" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Jadwal Pelajaran</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => navigation.navigate("Kalender")}
        >
          <FontAwesome name="calendar-o" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Kalender</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Section */}
      <View style={styles.additionalSection}>
        <Text style={styles.additionalTitle}>Pengingat & Informasi</Text>
        <View style={styles.infoCard}>
          <FontAwesome name="bullhorn" size={20} color="#1EB854" />
          <Text style={styles.infoText}>
            Jangan lupa untuk melakukan absensi sebelum pukul 08:00 pagi!
          </Text>
        </View>
        <View style={styles.infoCard}>
          <FontAwesome name="line-chart" size={20} color="#1EB854" />
          <Text style={styles.infoText}>
            Kehadiran bulan ini: 90%. Tetap pertahankan!
          </Text>
        </View>
      </View>
    </ScrollView>
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  subHeaderText: {
    fontSize: 14,
    color: "#ffffff",
    marginTop: 5,
  },
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  menuCard: {
    backgroundColor: "#1EB854",
    width: "40%",
    height: 75, // Ukuran lebih kecil
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },
  menuText: {
    marginTop: 5,
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  additionalSection: {
    padding: 20,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 3,
  },
  additionalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1EB854",
    marginBottom: 10,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#555",
  },
});

export default HomeScreen;
