import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: { //TODO da valutare le option
      infuraId: '11ee0c6dd31d48119b713767faf131a8',
      rpc: {
        1: "https://mainnet.infura.io/v3/11ee0c6dd31d48119b713767faf131a8",
        3: "https://ropsten.infura.io/v3/11ee0c6dd31d48119b713767faf131a8",
        4: "https://rinkeby.infura.io/v3/11ee0c6dd31d48119b713767faf131a8",
        // ...
      }
    }
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "CCLUB", // Required
      infuraId: "11ee0c6dd31d48119b713767faf131a8", // Required
      rpc: {
        1: "https://mainnet.infura.io/v3/11ee0c6dd31d48119b713767faf131a8",
        3: "https://ropsten.infura.io/v3/11ee0c6dd31d48119b713767faf131a8",
        4: "https://rinkeby.infura.io/v3/11ee0c6dd31d48119b713767faf131a8",
        // ...
      }, // Optional if `infuraId` is provided; otherwise it's required
      darkMode: true // Optional. Use dark theme, defaults to false
    }
  }
};

const injected = new InjectedConnector({ //METAMASK
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97]
});

const walletconnect = new WalletConnectConnector({
  rpcUrl: 'wss://rinkeby.infura.io/ws/v3/11ee0c6dd31d48119b713767faf131a8',
  //bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/11ee0c6dd31d48119b713767faf131a8`,
  appName: "CCLUB",
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97], //TODO valutare
  qrcode: true,
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink
};