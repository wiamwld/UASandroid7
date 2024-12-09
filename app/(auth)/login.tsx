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

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Username dan Password harus diisi!');
      return;
    }
    Alert.alert('Login Berhasil', `Selamat datang, ${username}!`);
  };

  return (
    // Menutup Keyboard saat pengguna mengetuk area kosong
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Selamat Datang,</Text>
          <Text style={styles.title}>E-ABSENSI KITA</Text>
          <Text style={styles.subtitle}>
            Absensi Guru SMA Bustanul Mubtadiin Pangurayan-Propopo-Pamekasan
          </Text>
        </View>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Masukkan Username"
          placeholderTextColor="#B0B0B0"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Additional Links */}
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
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
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  loginButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#1EB854',
    borderWidth: 1.5,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1EB854',
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
