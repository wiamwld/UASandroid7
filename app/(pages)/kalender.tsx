import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const KalenderSekolah = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigation = useNavigation();

  // Hari penting dengan keterangan acara
  const specialDates = {
    "2024-01-10": { marked: true, dotColor: "#FF7043", event: "Rapat Guru" },
    "2024-02-14": {
      marked: true,
      dotColor: "#4CAF50",
      event: "Workshop Pendidikan",
    },
    "2024-03-01": { marked: true, dotColor: "#2196F3", event: "Hari Olahraga" },
  };

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
        <Ionicons name="chevron-back" size={28} color="#4CAF50" />
      </TouchableOpacity>

      {/* Judul */}
      <Text style={styles.title}>Kalender Sekolah</Text>

      {/* Komponen Kalender */}
      <Calendar
        minDate={"2020-01-01"}
        maxDate={"2030-12-31"}
        markedDates={{
          ...specialDates,
          [selectedDate]: {
            selected: true,
            selectedColor: "#4CAF50",
            selectedTextColor: "#FFFFFF",
          },
        }}
        onDayPress={onDayPress}
        theme={{
          backgroundColor: "transparent",
          calendarBackground: "#FFFFFF",
          textSectionTitleColor: "#4CAF50",
          selectedDayBackgroundColor: "#4CAF50",
          selectedDayTextColor: "#FFFFFF",
          todayTextColor: "#FF5722",
          dayTextColor: "#000000",
          arrowColor: "#4CAF50",
          monthTextColor: "#4CAF50",
          textDayFontWeight: "500",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "500",
          textDayFontSize: 16,
          textMonthFontSize: 22,
          textDayHeaderFontSize: 14,
        }}
      />

      {/* Tanggal Dipilih */}
      {selectedDate ? (
        <View style={styles.infoContainer}>
          <Text style={styles.selectedDate}>
            Tanggal dipilih:{" "}
            <Text style={styles.dateHighlight}>{selectedDate}</Text>
          </Text>
          <Text style={styles.eventText}>
            {specialDates[selectedDate]?.event
              ? `Acara: ${specialDates[selectedDate].event}`
              : "Tidak ada acara khusus."}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4CAF50",
    marginBottom: 20,
    marginTop: 60,
  },
  selectedDate: {
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
    marginBottom: 10,
  },
  dateHighlight: {
    fontWeight: "bold",
    color: "#4CAF50",
  },
  eventText: {
    fontSize: 16,
    color: "#FF7043",
    textAlign: "center",
  },
  infoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 3,
  },
});

export default KalenderSekolah;
