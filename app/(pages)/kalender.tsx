import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Ikon untuk tombol kembali

const KalenderSekolah = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigation = useNavigation();

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="#1EB854" />
        <Text style={styles.backText}>Kembali</Text>
      </TouchableOpacity>

      {/* Judul */}
      <Text style={styles.title}>Kalender Sekolah</Text>

      {/* Komponen Kalender */}
      <Calendar
        minDate={"2000-01-01"}
        maxDate={"2026-12-31"}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#1EB854" },
        }}
        onDayPress={onDayPress}
        theme={{
          backgroundColor: "transparent",
          calendarBackground: "#FFFFFF",
          textSectionTitleColor: "#1EB854",
          selectedDayBackgroundColor: "#1EB854",
          selectedDayTextColor: "#FFFFFF",
          todayTextColor: "#FF7043",
          dayTextColor: "#000000",
          arrowColor: "#1EB854",
          monthTextColor: "#1EB854",
          textDayFontWeight: "500",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "500",
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 14,
        }}
      />

      {/* Tanggal yang Dipilih */}
      {selectedDate ? (
        <Text style={styles.selectedDate}>Tanggal dipilih: {selectedDate}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    padding: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: "#1EB854",
    marginLeft: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1EB854",
    marginBottom: 20,
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
  },
});

export default KalenderSekolah;
