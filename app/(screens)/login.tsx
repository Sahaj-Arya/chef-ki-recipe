// screens/login.tsx

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);

    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }
    // Your login logic here
    Alert.alert("Login", `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: "20@s",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "24@ms",
    fontWeight: "bold",
    marginBottom: "30@vs",
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: "45@vs",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: "8@ms",
    paddingHorizontal: "10@s",
    marginBottom: "15@vs",
    fontSize: "14@ms",
    color: "#000",
    backgroundColor: "#fff",
  },
  button: {
    height: "45@vs",
    backgroundColor: "#007AFF",
    borderRadius: "8@ms",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10@vs",
  },
  buttonText: {
    color: "#fff",
    fontSize: "16@ms",
    fontWeight: "600",
  },
});
