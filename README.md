# web3-react-native-dapp-viem

This repository showcases how to build a modern web3 dApp with React Native, [viem](https://viem.sh) and [WalletConnectModal](https://docs.walletconnect.com/advanced/walletconnectmodal/about)

## Requirements

- [Expo environment setup](https://docs.expo.dev/get-started/installation/#requirements) (Node.js, Git, Watchman)
- A [Wallet Connect Cloud](https://cloud.walletconnect.com/sign-in) project ID
- Expo Go app installed in your smartphone
- One or more web3 wallets installed in your smartphone (e.g. MetaMask, Rainbow Wallet, Trust Wallet, etc)

## How to run

- In `App.tsx` fill in `projectId="..."` with your Wallet Connect Cloud project ID
- `npm start`
- Open Expo Go app in your smartphone
- If your smartphone is in the same network as your computer, the local dev server should appear as the first option. If it doesn't, use the app to scan the QR Code presented in the terminal
