import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export default function Translate() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Translate</Text>
        <Text style={styles.subtitle}>Type or upload a photo to translate</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter text to translate..."
          placeholderTextColor="#666"
          multiline
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="image" size={24} color="white" />
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.translationContainer}>
        <Text style={styles.translationTitle}>Translation</Text>
        <View style={styles.translationPlaceholder}>
          <MaterialIcons name="translate" size={32} color="#666" />
          <Text style={styles.placeholderText}>Translation will appear here</Text>
        </View>
      </View>

      <View style={styles.languageSelector}>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>From: Auto-Detect</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="#FF6B6B" />
        </TouchableOpacity>
        
        <MaterialIcons name="swap-horiz" size={24} color="#FF6B6B" />
        
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>To: English</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="#FF6B6B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  inputContainer: {
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  translationContainer: {
    marginTop: 20,
  },
  translationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  translationPlaceholder: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
  },
  placeholderText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
  },
  languageSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  languageButtonText: {
    color: '#333',
    fontSize: 14,
    marginRight: 5,
    flex: 1,
  },
}); 