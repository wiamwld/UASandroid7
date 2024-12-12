import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function DashboardScreen({ navigation }) {
  const handleLogout = () => {
    // Logika untuk logout (hapus token, reset state, dll.)
    navigation.replace('Login'); // Arahkan kembali ke halaman login
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard Guru</Text>
        <Text style={styles.subtitle}>Selamat Datang, [Nama Guru]</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {/* Absensi */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Absensi')}>
          <Text style={styles.menuText}>Absensi</Text>
        </TouchableOpacity>

        {/* Jadwal */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Jadwal')}>
          <Text style={styles.menuText}>Jadwal Pelajaran</Text>
        </TouchableOpacity>

        {/* Rekap Nilai */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('RekapNilai')}>
          <Text style={styles.menuText}>Rekap Nilai</Text>
        </TouchableOpacity>

        {/* Pengumuman */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Pengumuman')}>
          <Text style={styles.menuText}>Pengumuman</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1EB854',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  menuContainer: {
    width: '100%',
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ccc',
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1EB854',
  },
  logoutButton: {
    backgroundColor: '#FF4D4D',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
