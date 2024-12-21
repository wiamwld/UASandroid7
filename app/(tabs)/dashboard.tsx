import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const HomeScreen = () => {
  const userName = "WIAM WLD"; // Contoh nama dinamis

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <Image
              source={require("@/assets/images/Splash.png")}
              style={styles.userPhoto}
            />
            <View>
              <Text style={styles.userName}>{userName}</Text>
              <Text style={styles.userRole}>E-ABSENSI KITA</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <MaterialIcons name="notifications" size={25} color="#1EB854" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Cards */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuCard}
          onPress={() => {
            router.push("/absensi");
          }}
        >
          <FontAwesome name="check-circle" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Absensi Harian</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <FontAwesome name="calendar" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Riwayat Kehadiran</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <FontAwesome name="file-text" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Pengajuan Izin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <FontAwesome name="users" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Data Guru</Text>
        </TouchableOpacity>

        {/* New Features */}
        <TouchableOpacity style={styles.menuCard}>
          <MaterialIcons name="schedule" size={25} color="#ffffff" />
          <Text style={styles.menuText}>Jadwal Pelajaran</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
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

      {/* News Section */}
      <View style={styles.newsSection}>
        <Text style={styles.additionalTitle}>Berita Terbaru</Text>
        <ScrollView>
          <View style={styles.newsCard}>
            <FontAwesome name="newspaper-o" size={20} color="#1EB854" />
            <Text style={styles.newsText}>
              Hari libur Tahun Baru Masehi 2024 diundur ke bulan Maret.
            </Text>
          </View>
          <View style={styles.newsCard}>
            <FontAwesome name="newspaper-o" size={20} color="#1EB854" />
            <Text style={styles.newsText}>
              Kegiatan rutin bulan ini: Seminar Pendidikan Nasional.
            </Text>
          </View>
        </ScrollView>
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
  },
  headerContent: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    color: "#1EB854",
    fontWeight: "bold",
  },
  userRole: {
    fontSize: 12,
    color: "#555",
  },
  notificationIcon: {
    padding: 5,
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
    height: 75,
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
  newsSection: {
    padding: 20,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 3,
  },
  newsCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  newsText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#555",
  },
});

export default HomeScreen;
