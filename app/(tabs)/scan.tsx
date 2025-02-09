import React, { useRef, useState } from "react";
import {
  CameraType,
  CameraView,
  useCameraPermissions,
  CameraMode,
  BarcodeScanningResult,
} from "expo-camera";
import { View, Pressable, Button, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { AntDesign, Feather, FontAwesome6, MaterialIcons } from "@expo/vector-icons";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [mode, setMode] = useState<CameraMode>("picture");
  const [facing, setFacing] = useState<CameraType>("back");
  const [isRecording, setIsRecording] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);

  // Request camera permissions
  if (!permission) return null;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>We need permission to use the camera.</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  // Handle QR Code Scanning
  const handleBarcodeScanned = (result: BarcodeScanningResult) => {
    setScannedData(result.data);
    setIsScanning(false); // Stop scanning after the first result
  };

  // Take a Picture
  const takePicture = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    setPhotoUri(photo?.uri || null);
  };

  // Record a Video
  const recordVideo = async () => {
    if (isRecording) {
      setIsRecording(false);
      cameraRef.current?.stopRecording();
      return;
    }
    setIsRecording(true);
    const video = await cameraRef.current?.recordAsync();
    console.log({ video });
  };

  // Toggle between Camera Mode & QR Scanner Mode
  const toggleMode = () => {
    if (isScanning) {
      setIsScanning(false); // Stop scanning and return to camera mode
    } else {
      setMode((prev) => (prev === "picture" ? "video" : "picture"));
    }
  };

  // Toggle between Camera and QR Scanner
  const toggleScanner = () => {
    setIsScanning((prev) => !prev);
    setScannedData(null);
  };

  // Switch Between Front & Back Camera
  const toggleFacing = () => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };

  // Render Captured Photo
  const renderCapturedPhoto = () => (
    <View>
      <Image source={{ uri: photoUri! }} contentFit="contain" style={{ width: 300, aspectRatio: 1 }} />
      <Button onPress={() => setPhotoUri(null)} title="Take Another Picture" />
    </View>
  );

  // Render QR Scanned Result
  const renderScannedData = () => (
    <View style={styles.scannedDataContainer}>
      <Text style={styles.scannedText}>Scanned QR Code:</Text>
      <Text style={styles.scannedResult}>{scannedData}</Text>
      <Button title="Scan Again" onPress={() => setScannedData(null)} />
    </View>
  );

  // Render Camera or QR Scanner View
  const renderCameraView = () => (
    <CameraView
      style={styles.camera}
      ref={cameraRef}
      mode={isScanning ? "picture" : mode} // Use picture mode when scanning
      facing={facing}
      onBarcodeScanned={isScanning ? handleBarcodeScanned : undefined} // Only scan when QR mode is active
    >
      <View style={styles.controls}>
        {/* Toggle Mode: Picture/Video */}
        <Pressable onPress={toggleMode}>
          {isScanning ? (
            <MaterialIcons name="qr-code-scanner" size={32} color="white" />
          ) : mode === "picture" ? (
            <AntDesign name="picture" size={32} color="white" />
          ) : (
            <Feather name="video" size={32} color="white" />
          )}
        </Pressable>

        {/* Shutter Button (Take Picture / Record Video) */}
        {!isScanning && (
          <Pressable onPress={mode === "picture" ? takePicture : recordVideo}>
            {({ pressed }) => (
              <View style={[styles.shutterBtn, { opacity: pressed ? 0.5 : 1 }]}>
                <View style={[styles.shutterBtnInner, { backgroundColor: mode === "picture" ? "white" : "red" }]} />
              </View>
            )}
          </Pressable>
        )}

        {/* Toggle Camera Facing */}
        <Pressable onPress={toggleFacing}>
          <FontAwesome6 name="rotate-left" size={32} color="white" />
        </Pressable>
      </View>

      {/* QR Scanner Toggle Button */}
      <Pressable style={styles.scanToggle} onPress={toggleScanner}>
        <Text style={styles.scanToggleText}>{isScanning ? "Exit QR Mode" : "Scan QR Code"}</Text>
      </Pressable>
    </CameraView>
  );

  return (
    <View style={styles.container}>
      {photoUri ? renderCapturedPhoto() : scannedData ? renderScannedData() : renderCameraView()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  controls: {
    position: "absolute",
    bottom: 44,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  shutterBtn: {
    backgroundColor: "transparent",
    borderWidth: 5,
    borderColor: "white",
    width: 85,
    height: 85,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  shutterBtnInner: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  scanToggle: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 10,
    borderRadius: 8,
  },
  scanToggleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  scannedDataContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  scannedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  scannedResult: {
    color: "yellow",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});
