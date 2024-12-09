import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Timer untuk berpindah ke halaman berikutnya
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Ganti dengan halaman berikutnya (Login, Dashboard, dll.)
    }, 3000); // 3000 ms = 3 detik

    return () => clearTimeout(timer); // Membersihkan timer jika komponen unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Logo berbentuk segitiga */}
      <View style={styles.logoContainer}>
        <View style={styles.triangle} />
        <View style={styles.innerTriangle} />
      </View>

      {/* Teks di bawah logo */}
      <Text style={styles.text}>e-Absensi Kita</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  triangle: {
    width: 150,
    height: 150,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 75,
    borderRightWidth: 75,
    borderBottomWidth: 150,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#1EB854', // Warna hijau pada logo luar
  },
  innerTriangle: {
    position: 'absolute',
    top: 20,
    width: 110,
    height: 110,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 55,
    borderRightWidth: 55,
    borderBottomWidth: 110,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff', // Warna putih untuk bagian dalam
  },
  text: {
    fontSize: 28, // Ukuran teks diperbesar agar lebih jelas
    fontWeight: 'bold', // Membuat teks tebal
    color: '#000',
    textAlign: 'center',
  },
});
