import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../../assets/images/camera.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.funTitle}>What is WhatThe? 🤔</Text>
        <Text style={styles.definition}>
          WhatThe is an advanced virtual assistant application powered by Gemini AI, 
          developed using React Native by Turgut Egemen Özyürek and Özgün Kasapoğlu.
        </Text>
        
        <Text style={styles.featuresTitle}>Features ✨</Text>
        <View style={styles.featuresList}>
          <View style={styles.featureContainer}>
            <Text style={styles.featureItem}>• Translate 🌍</Text>
            <Text style={styles.featureDescription}>
              Translate text by typing or uploading a photo. You can also take a picture of an unknown language and have it translated instantly.
            </Text>
          </View>

          <View style={styles.featureContainer}>
            <Text style={styles.featureItem}>• WhatThe..? 🤖</Text>
            <Text style={styles.featureDescription}>
              Encountered an unfamiliar object? Use the "What the..?" feature to identify and learn more about it.
            </Text>
          </View>
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
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  funTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FF6B6B',
    textShadowColor: '#4A90E2',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    letterSpacing: 1,
    transform: [{ rotate: '-2deg' }],
    padding: 10,
  },
  definition: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'left',
    paddingHorizontal: 20,
    lineHeight: 24,
    marginTop: 10,
  },
  featuresTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FF6B6B',
    textShadowColor: '#4A90E2',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    letterSpacing: 1,
    transform: [{ rotate: '-2deg' }],
    padding: 10,
    marginTop: 20,
  },
  featuresList: {
    alignSelf: 'flex-start',
    paddingHorizontal: 30,
    marginTop: 10,
    width: '100%',
  },
  featureContainer: {
    marginBottom: 20,
  },
  featureItem: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF6B6B',
    textShadowColor: '#4A90E2',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginVertical: 5,
    letterSpacing: 0.5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    paddingLeft: 20,
    lineHeight: 20,
  },
});
