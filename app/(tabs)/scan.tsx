import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ScanQR() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Scan QR</Text>
        <Text style={styles.subtitle}>Point your camera at a QR code</Text>
      </View>

      <View style={styles.cameraPlaceholder}>
        <MaterialIcons name="qr-code-scanner" size={64} color="#FF6B6B" />
        <Text style={styles.placeholderText}>Camera Preview</Text>
      </View>

      <TouchableOpacity style={styles.scanButton}>
        <Text style={styles.buttonText}>Start Scanning</Text>
      </TouchableOpacity>

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsTitle}>How to scan:</Text>
        <Text style={styles.instructionsText}>1. Allow camera access</Text>
        <Text style={styles.instructionsText}>2. Point camera at QR code</Text>
        <Text style={styles.instructionsText}>3. Hold steady until scan completes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  cameraPlaceholder: {
    height: 300,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  placeholderText: {
    marginTop: 10,
    color: '#666',
    fontSize: 16,
  },
  scanButton: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  instructionsContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  instructionsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
}); 