// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [valid, setValid] = useState('');

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setValid('');
      return;
    } else{
      setError('');
      setValid('Passwords matched');
      return;
    }
    

    console.log(`Registering with username: ${username} and password: ${password}`);
  };
  const loginPage = () => {
    navigation.navigate('LoginPage'); // Navigate to the Register screen
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to My App</Text>
      </View>
      <View style={styles.registerContainer}>
        <View style={styles.registerCard}>
          <Text style={styles.cardTitle}>Register</Text>

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

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          {valid ? <Text style={styles.validText}>{valid}</Text> : null}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginLink} onPress={loginPage}>
            <Text style={styles.loginText}>Sudah punya akun? Masuk</Text>
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
  registerContainer: {
    flex: 7, // Takes up 70% of the screen
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Set width to 100%
    backgroundColor: '#20b2aa',
  },
  registerCard: {
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
  registerButton: {
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
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    color: 'green',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  validText: {
    color: 'green',
    marginBottom: 10,
  },
});

export default RegisterScreen;
