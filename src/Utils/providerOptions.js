import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "CCLUB", // Required
      infuraId: '11ee0c6dd31d48119b713767faf131a8', // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: { //TODO da valutare le option
      infuraId: '11ee0c6dd31d48119b713767faf131a8',
      rpc: {
        1: "https://mainnet.mycustomnode.com",
        3: "https://ropsten.mycustomnode.com",
        4: "https://rinkeby.infura.io/v3/11ee0c6dd31d48119b713767faf131a8",
        100: "https://dai.poa.network",
        // ...
      },
      chainId: 1
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
  appName: "web3-react-demo",
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
  qrcode: true,
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink
};