import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Text style={styles.profileName}>AKU UNYIL</Text>
        <Text style={styles.profileDetail}>akuunyil@gmail.com</Text>
      </View>

      {/* Profile Information */}
      <View style={styles.profileDetailsContainer}>
        <Text style={styles.sectionTitle}>Informasi Profil</Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>ID User</Text>
          <Text style={styles.detailValue}>ARDILAN12345</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Nomor Telepon</Text>
          <Text style={styles.detailValue}>+62 812 3456 7890</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Tanggal Lahir</Text>
          <Text style={styles.detailValue}>10 Januari 2000</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Alamat</Text>
          <Text style={styles.detailValue}>Jl. Mawar No. 123, Pamekasan</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ganti Password</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 80,
    backgroundColor: "#1EB85E", // Warna hijau yang baru
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileSection: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  profileDetail: {
    fontSize: 14,
    color: "#555",
  },
  profileDetailsContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1EB85E",
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  detailLabel: {
    fontSize: 14,
    color: "#555",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#1EB85E", // Warna hijau yang baru
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  logoutText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
