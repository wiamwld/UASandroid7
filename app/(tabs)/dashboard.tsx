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
          <TouchableOpacity style={styles.notificationIcon}
          onPress={() => {
                    router.push("/notifikasi");
                  }}
          >
            <MaterialIcons name="notifications" size={25} color="#1EB854" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Cards */}
      <View style={styles.menuContainer}>
        {[
          { label: "Absensi Harian", icon: "check-circle", route: "/absensi" },
          { label: "Riwayat Kehadiran", icon: "calendar", route: "/riwayat" },
          { label: "Pengajuan cuti", icon: "file-text", route: "/pengajuancuti" },
          { label: "Data Guru", icon: "users", route: "/dataguru" },
          { label: "Jadwal Pelajaran", icon: "schedule", route: "/jadwalpelajaran" },
          { label: "Kalender", icon: "calendar-o", route: "/kalender"},
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuCard}
            onPress={() => item.route && router.push(item.route)}
          >
            <FontAwesome name={item.icon} size={25} color="#ffffff" />
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Additional Section */}
      <View style={styles.additionalSection}>
        <Text style={styles.additionalTitle}>Pengingat & Informasi</Text>
        {[
          {
            icon: "bullhorn",
            text: "Jangan lupa untuk melakukan absensi sebelum pukul 08:00 pagi!",
          },
          {
            icon: "line-chart",
            text: "Kehadiran bulan ini: 90%. Tetap pertahankan!",
          },
        ].map((item, index) => (
          <View key={index} style={styles.infoCard}>
            <FontAwesome name={item.icon} size={20} color="#1EB854" />
            <Text style={styles.infoText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* News Section */}
      <View style={styles.newsSection}>
        <Text style={styles.additionalTitle}>Berita Terbaru</Text>
        {[
          {
            icon: "newspaper-o",
            text: "Hari libur Tahun Baru Masehi 2024 diundur ke bulan Maret.",
          },
          {
            icon: "newspaper-o",
            text: "Kegiatan rutin bulan ini: Seminar Pendidikan Nasional.",
          },
        ].map((item, index) => (
          <View key={index} style={styles.newsCard}>
            <FontAwesome name={item.icon} size={20} color="#1EB854" />
            <Text style={styles.newsText}>{item.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
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
    padding: 15,
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
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    color: "#1EB854",
    fontWeight: "bold",
  },
  userRole: {
    fontSize: 14,
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
    width: "45%",
    height: 90,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },
  menuText: {
    marginTop: 8,
    fontSize: 13,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  additionalSection: {
    padding: 20,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderRadius: 12,
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
    backgroundColor: "#F9F9F9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  infoText: {
    marginLeft: 12,
    fontSize: 14,
    color: "#555",
  },
  newsSection: {
    padding: 20,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    elevation: 3,
  },
  newsCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  newsText: {
    marginLeft: 12,
    fontSize: 14,
    color: "#555",
  },
});

export default HomeScreen;
