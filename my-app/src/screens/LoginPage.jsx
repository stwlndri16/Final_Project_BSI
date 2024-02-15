
// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const registerPage = () => {
    navigation.navigate('RegisterPage'); // Navigate to the Register screen
  };

  const homePage = () => {
    navigation.navigate('HomePage'); // Navigate to the Home screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to My App</Text>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.loginCard}>
            <Text style={styles.cardTitle}>Login</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={homePage}>
                <Text style={styles.buttonText}>Main Langsung!</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.registerLink} onPress={registerPage}>
                <Text style={styles.registerText}>Belum punya Akun? Daftar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the start of the screen
    alignItems: 'center',
  },
  header: {
    flex: 3, // Takes up 30% of the screen
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Set width to 100%
    backgroundColor: '#20b2aa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  loginContainer: {
    flex: 7, // Takes up 70% of the screen
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Set width to 100%
    backgroundColor: '#20b2aa',
  },
  loginCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    width: '100%', // Set width to 100%
    height: '100%',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: 'green',
  },
});

export default LoginScreen;
