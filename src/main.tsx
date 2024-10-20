import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { Network } from "@aptos-labs/ts-sdk";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
const wallets = [new PontemWallet(), new TrustWallet()];

createRoot(document.getElementById('root')!).render(
  
  <AptosWalletAdapterProvider
    plugins={wallets}
    autoConnect={true}    
    optInWallets={["Petra"]}
    dappConfig={{ network: Network.DEVNET, aptosApiKey: "AG-4AP396KX3CNVWFDYMQZ1ETGIKAZDEMJVM" }}
    onError={(error) => {
      console.log(`${error}`);
    }}
  >
    <App />
  </AptosWalletAdapterProvider>,
)
