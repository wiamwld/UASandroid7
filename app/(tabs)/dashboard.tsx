import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  const [activeScreen, setActiveScreen] = useState('home'); // State for active screen

  const students = [
    { id: '1', name: 'Ahmad Fauzi', class: '10A' },
    { id: '2', name: 'Siti Aisyah', class: '10B' },
    { id: '3', name: 'Rina Lestari', class: '11A' },
    { id: '4', name: 'Budi Santoso', class: '11B' },
  ];

  const teachers = [
    { id: '1', name: 'Pak Budi', subject: 'Matematika' },
    { id: '2', name: 'Bu Rini', subject: 'Bahasa Inggris' },
    { id: '3', name: 'Pak Sugeng', subject: 'Fisika' },
    { id: '4', name: 'Bu Ratna', subject: 'Kimia' },
  ];

  const renderHome = () => (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Selamat Datang, AKU UNYIL</Text>
        <Text style={styles.subHeaderText}>E-ABSENSI KITA</Text>
      </View>

      {/* Menu */}
      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <TouchableOpacity style={styles.menuCardSmall}>
            <FontAwesome name="calendar" size={25} color="#ffffff" />
            <Text style={styles.menuTextSmall}>Jadwal Pelajran</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCardSmall} onPress={() => setActiveScreen('students')}>
            <FontAwesome name="book" size={25} color="#ffffff" />
            <Text style={styles.menuTextSmall}>DATA Siswa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuRow}>
          <TouchableOpacity style={styles.menuCardSmall} onPress={() => setActiveScreen('teachers')}>
            <FontAwesome name="user" size={25} color="#ffffff" />
            <Text style={styles.menuTextSmall}>DATA Guru</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCardSmall}>
            <FontAwesome name="calendar-o" size={25} color="#ffffff" />
            <Text style={styles.menuTextSmall}>Kalender</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuRow}>
          <TouchableOpacity style={styles.menuCardSmall}>
            <FontAwesome name="check-square" size={25} color="#ffffff" />
            <Text style={styles.menuTextSmall}>Nilai SISWA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCardSmall}>
            <FontAwesome name="clock-o" size={25} color="#ffffff" />
            <Text style={styles.menuTextSmall}>Absensi GURU</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Features Specific to Absensi Guru */}
      <View style={styles.absensiFeaturesContainer}>
        <TouchableOpacity style={styles.featureCard}>
          <FontAwesome name="users" size={25} color="#1EB854" />
          <Text style={styles.featureText}>Rekap Kehadiran</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureCard}>
          <FontAwesome name="line-chart" size={25} color="#1EB854" />
          <Text style={styles.featureText}>Laporan Absensi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderStudents = () => (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Data Siswa</Text>
        <TouchableOpacity onPress={() => setActiveScreen('home')} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Student List */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <Text style={styles.studentName}>{item.name}</Text>
            <Text style={styles.studentClass}>Kelas: {item.class}</Text>
          </View>
        )}
        contentContainerStyle={styles.studentList}
      />
    </View>
  );

  const renderTeachers = () => (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Data Guru</Text>
        <TouchableOpacity onPress={() => setActiveScreen('home')} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Teacher List */}
      <FlatList
        data={teachers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.teacherCard}>
            <Text style={styles.teacherName}>{item.name}</Text>
            <Text style={styles.teacherSubject}>Mata Pelajaran: {item.subject}</Text>
          </View>
        )}
        contentContainerStyle={styles.teacherList}
      />
    </View>
  );

  return activeScreen === 'home' ? renderHome() : activeScreen === 'students' ? renderStudents() : renderTeachers();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#1EB854',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    position: 'relative',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 5,
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'flex-start',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  menuCardSmall: {
    backgroundColor: '#1EB854',
    width: '42%',
    height: 75,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuTextSmall: {
    marginTop: 5,
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  absensiFeaturesContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000000',
  },
  studentList: {
    padding: 15,
  },
  studentCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  studentClass: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  teacherList: {
    padding: 15,
  },
  teacherCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  teacherSubject: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default HomeScreen;
