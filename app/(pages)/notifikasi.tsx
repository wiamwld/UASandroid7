import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      title: "Siap-siap Absen Masuk.",
      message:
        "Mau mengingatkan, nanti masuk jam 8 pagi loh. Sudah siap bekerja? Jangan terlambat ya.",
      date: "19-11-2024, 07:30",
    },
    {
      id: "2",
      title: "Siap-siap Absen Masuk.",
      message:
        "Selamat pagi kak, siap-siap kerja ya kak, hari ini masuk jam 8. Jangan terlambat ya.",
      date: "18-11-2024, 07:30",
    },
    {
      id: "3",
      title: "Siap-siap Absen Masuk.",
      message:
        "Eh kak, sudah siap-siap belum? sebentar lagi jam 8 loh, masuk kerja kan hari ini?",
      date: "15-11-2024, 07:30",
    },
    {
      id: "4",
      title: "Siap-siap Absen Masuk.",
      message:
        "Hari ini masuk jam 8 pagi ya kak! Tetap semangat dan selalu terapkan protokol 3M ya.",
      date: "14-11-2024, 07:30",
    },
    {
      id: "5",
      title: "Siap-siap Absen Masuk.",
      message:
        "Hai kak! Jangan lupa masuk kerja jam 8 pagi ya. Semoga lebih produktif hari ini.",
      date: "13-11-2024, 07:30",
    },
  ]);

  const markAllAsRead = () => {
    alert("Semua notifikasi telah ditandai sebagai dibaca.");
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifikasi</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.tabText}>Semua</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Belum Dibaca</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Telah Dibaca</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.markAllButton} onPress={markAllAsRead}>
        <Text style={styles.markAllText}>Tandai Dibaca Semua</Text>
      </TouchableOpacity>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.notificationList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#E0F7F9",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#E0F7F9",
  },
  activeTab: {
    backgroundColor: "#1EB854",
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
  markAllButton: {
    backgroundColor: "#1EB854",
    padding: 12,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  markAllText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  notificationList: {
    paddingHorizontal: 16,
  },
  notificationItem: {
    backgroundColor: "#FFF",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  notificationDate: {
    fontSize: 12,
    color: "#999",
  },
});

export default NotificationScreen;
