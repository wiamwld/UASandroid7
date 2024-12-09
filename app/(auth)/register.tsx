import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Validasi input
    if (!fullName || !email || !username || !password || !confirmPassword) {
      Alert.alert('Error', 'Semua field harus diisi!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password dan Konfirmasi Password tidak cocok!');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'Password minimal 8 karakter!');
      return;
    }

    // Kirim data ke backend (contoh)
    Alert.alert('Sukses', `Akun untuk ${fullName} berhasil dibuat!`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Daftar Akun</Text>
          <Text style={styles.subtitle}>Buat akun baru untuk guru</Text>
        </View>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Nama Lengkap"
          placeholderTextColor="#B0B0B0"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B0B0B0"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#B0B0B0"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Konfirmasi Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Register Button */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>DAFTAR</Text>
        </TouchableOpacity>

        {/* Additional Links */}
        <TouchableOpacity style={styles.loginLink}>
          <Text style={styles.loginLinkText}>Sudah punya akun? Login di sini</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1EB854',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#1EB854',
    borderWidth: 1.5,
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1EB854',
  },
  loginLink: {
    marginTop: 15,
  },
  loginLinkText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
