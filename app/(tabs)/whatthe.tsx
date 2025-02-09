import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export default function WhatThe() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>What the..?</Text>
          <Text style={styles.subtitle}>Identify objects with ease</Text>
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>Tips for best results:</Text>
          <Text style={styles.tipsText}>• Ensure good lighting</Text>
          <Text style={styles.tipsText}>• Keep the camera steady</Text>
          <Text style={styles.tipsText}>• Center the object in frame</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  tipsContainer: {
    marginTop: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 15,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  tipsText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
}); 