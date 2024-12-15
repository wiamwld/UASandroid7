import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Pustaka ikon

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.username}>MOH. ARDILAN</Text>
      </View>

      {/* Grid Menu */}
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem}>
          <FontAwesome name="search" size={24} color="#fff" />
          <Text style={styles.gridText}>Jadwal Pelajaran</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <FontAwesome name="book" size={24} color="#fff" />
          <Text style={styles.gridText}>Data Siswa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <FontAwesome name="user" size={24} color="#fff" />
          <Text style={styles.gridText}>Data Guru</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <FontAwesome name="calendar" size={24} color="#fff" />
          <Text style={styles.gridText}>Kalender</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <FontAwesome name="check" size={24} color="#fff" />
          <Text style={styles.gridText}>Nilai Siswa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <FontAwesome name="question" size={24} color="#fff" />
          <Text style={styles.gridText}>Pusat Bantuan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1EB854",
  },
  header: {
    backgroundColor: "#1EB854",
    padding: 20,
    alignItems: "center",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  gridContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridItem: {
    backgroundColor: "#1EB854",
    width: "40%",
    height: 90,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  gridText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
