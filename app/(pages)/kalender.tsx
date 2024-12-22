import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

const KalenderScreen = () => {
  // Data kalender (bulan dan hari libur)
  const bulan = [
    {
      id: "1",
      nama: "Januari",
      hariLibur: [{ tanggal: 1, keterangan: "Tahun Baru" }],
    },
    { id: "2", nama: "Februari", hariLibur: [] },
    {
      id: "3",
      nama: "Maret",
      hariLibur: [{ tanggal: 25, keterangan: "Hari Raya Nyepi" }],
    },
    {
      id: "4",
      nama: "April",
      hariLibur: [{ tanggal: 10, keterangan: "Libur Sekolah" }],
    },
    { id: "5", nama: "Mei", hariLibur: [] },
    {
      id: "6",
      nama: "Juni",
      hariLibur: [{ tanggal: 1, keterangan: "Hari Lahir Pancasila" }],
    },
  ];

  // State bulan terpilih
  const [bulanTerpilih, setBulanTerpilih] = useState(bulan[0]);

  // Render daftar hari
  const renderHari = () => {
    const hari = Array.from({ length: 31 }, (_, i) => i + 1); // Angka 1-31
    return (
      <FlatList
        data={hari}
        keyExtractor={(item) => item.toString()}
        numColumns={7}
        renderItem={({ item }) => {
          const libur = bulanTerpilih.hariLibur.find(
            (hl) => hl.tanggal === item
          );
          return (
            <TouchableOpacity
              style={[styles.hariBox, libur ? styles.hariLibur : null]}
              onPress={() => {
                if (libur) {
                  Alert.alert(
                    "Hari Libur",
                    `${libur.keterangan} (Tanggal ${item})`
                  );
                } else {
                  Alert.alert(
                    "Tanggal",
                    `Tanggal ${item} ${bulanTerpilih.nama}`
                  );
                }
              }}
            >
              <Text
                style={[styles.hariText, libur ? styles.hariLiburText : null]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Judul Halaman */}
      <Text style={styles.title}>Kalender Sekolah</Text>

      {/* Pilihan Bulan */}
      <FlatList
        horizontal
        data={bulan}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.bulanBox,
              bulanTerpilih.id === item.id ? styles.bulanBoxSelected : null,
            ]}
            onPress={() => setBulanTerpilih(item)}
          >
            <Text
              style={[
                styles.bulanText,
                bulanTerpilih.id === item.id ? styles.bulanTextSelected : null,
              ]}
            >
              {item.nama}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Grid Hari */}
      <View style={styles.kalender}>{renderHari()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1EB854",
    textAlign: "center",
    marginBottom: 20,
  },
  bulanBox: {
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  bulanBoxSelected: {
    backgroundColor: "#1EB854",
  },
  bulanText: {
    fontSize: 16,
    color: "#555",
  },
  bulanTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  kalender: {
    marginTop: 20,
  },
  hariBox: {
    width: 45,
    height: 45,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
    elevation: 2,
  },
  hariLibur: {
    backgroundColor: "#FFCDD2",
  },
  hariText: {
    fontSize: 14,
    color: "#555",
  },
  hariLiburText: {
    fontWeight: "bold",
    color: "#FF0000",
  },
});

export default KalenderScreen;
