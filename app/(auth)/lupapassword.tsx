import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForgotLoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Selamat Datang,</Text>
      <Text style={styles.title}>ABSENSI KITA</Text>
      <Text style={styles.subtitle}>
        Masukkan email atau username Anda untuk reset password
      </Text>
      
      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Email atau Username"
        placeholderTextColor="#B0B0B0"
      />

      {/* Reset Password Button */}
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>RESET PASSWORD</Text>
      </TouchableOpacity>

      {/* Back to Login */}
      <TouchableOpacity style={styles.backToLoginButton}>
        <Text style={styles.backToLoginText}>Kembali ke Login</Text>
      </TouchableOpacity>
    </View>
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
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginVertical: 10,
  },
  resetButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1EB854',
  },
  backToLoginButton: {
    marginTop: 20,
  },
  backToLoginText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
