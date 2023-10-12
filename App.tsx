import './polyfills';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {WalletConnectModal} from '@walletconnect/modal-react-native';
import HomePage from './src/pages/HomePage';
import {providerMetadata} from './src/clients/walletConnect';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <WalletConnectModal
        projectId="YOUR WALLET CONNECT CLOUD PROJECT ID"
        providerMetadata={providerMetadata}
      />

      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
