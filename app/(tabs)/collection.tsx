import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export default function Collection() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Collection</Text>
          <Text style={styles.subtitle}>All your saved items in one place</Text>
        </View>

        {/* Translations Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Translations</Text>
            <MaterialIcons name="translate" size={24} color="#FF6B6B" />
          </View>
          <View style={styles.itemPlaceholder}>
            <Text style={styles.placeholderText}>Your translations will appear here</Text>
          </View>
        </View>

        {/* What The Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Identifications</Text>
            <MaterialIcons name="search" size={24} color="#FF6B6B" />
          </View>
          <View style={styles.itemPlaceholder}>
            <Text style={styles.placeholderText}>Your identified objects will appear here</Text>
          </View>
        </View>

        {/* Clear All Button */}
        <TouchableOpacity style={styles.clearButton}>
          <MaterialIcons name="delete-outline" size={24} color="white" />
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
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
    marginBottom: 30,
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
  section: {
    marginBottom: 25,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  itemPlaceholder: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
  },
  placeholderText: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
  clearButton: {
    backgroundColor: '#FF6B6B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
}); 