import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const WelcomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  let welcome = () => {
    router.push("/(auth)/login")
  };

  let loading = () =>{
    setIsLoading(true)
    setTimeout(welcome,3000)
  }

  useEffect(() => {
    setTimeout(loading ,2000);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View style={styles.body}>
        <Image source={require('@/assets/images/SplashScreen.png')} style={styles.imageBody} />
        <Text style={styles.textImage}>E-ABSENSI</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
          <ActivityIndicator size={40} color={"#ffff"}/>
          <Text style={styles.textIndicator}>Tunggu Ya....</Text>
          </>
        ) : (
          <>
            <Text style={styles.textFooter}>from</Text>
            <Text style={styles.textMahasiswa}>mahasiswa</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
    backgroundColor:'#1EB854'
  },

  body: {
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBody: {
    height: 100,
    width: 100,
  },
  textImage: {
    fontSize: 20,
    fontWeight: "400",
    color:'#fffff'
  },
  footer: {
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    gap:20
  },
  textIndicator:{
    fontSize:15,
    fontWeight:"bold",
    color:'#fffff'

  },
  textFooter: {
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    color: "#fffff",
  },
  textMahasiswa: {
    fontSize: 15,
    textAlign: "center",
    color: "#fffff",
    
  },
});