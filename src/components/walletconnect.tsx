import { AptosStandardSupportedWallet, Wallet, WalletName, groupAndSortWallets, useWallet } from '@aptos-labs/wallet-adapter-react';
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const WalletConnect = () => {
  const { connect, disconnect,account, connected ,changeNetwork, wallets = [] ,signAndSubmitTransaction} = useWallet();  

  const { aptosConnectWallets } =
    groupAndSortWallets(wallets, {});

 
  const handleConnect = async () => {
    try {
      // Change below to the desired wallet name instead of "Petra"
      await connect("Petra" as WalletName<"Petra">); 
      // await changeNetwork(Network.DEVNET);
      console.log('Connected to wallet:', account);
    } catch (error) {
      console.log(error);
      console.error(`Failed to connect to wallet: ${error}` );
    }
  };

  const handleConnect2 = async (wallet: Wallet| AptosStandardSupportedWallet<string>) =>{
    try {
      // Change below to the desired wallet name instead of "Petra"
      
      await connect(wallet.name); 
      // await changeNetwork(Network.DEVNET);
      console.log('Connected to wallet:', account);
    } catch (error) {
      console.log(error);
      console.error(`Failed to connect to wallet: ${error}` );
    }
  }
 
  const handleDisconnect = async () => {
    try {      
      await disconnect();
      console.log('Disconnected from wallet');
    } catch (error) {
      console.log(error);
      console.error('Failed to disconnect from wallet:', error);
    }
  };

  const unstake = async () =>{
    // await changeNetwork(Network.DEVNET);
    if(account != null){                              
      const APTOS_CONFIG = new AptosConfig({
        network: Network.DEVNET,
        // fullnode: "http://127.0.0.1:8080"        
      });
      

      const aptos = new Aptos(APTOS_CONFIG);

      console.log(`Sender account is  ${account.address} `)

      const commitedTransaction =  await signAndSubmitTransaction({
        sender: account.address,
        data: {
          // The Move entry-function
          function: "0xd58057486691cb9e339ce1a6d79906e88e2819f3a2ab83e3e6241a5059cb270e::woosh4::unstake",
          functionArguments: ["500"],
        },
        options:{}
      });      
            
      const executedTransaction = await aptos.waitForTransaction(
        {
          transactionHash: commitedTransaction.hash,
        },
      );      
          
      console.log(executedTransaction)      

    }
  }

  const stake = async () =>{
    // await changeNetwork(Network.DEVNET);
    if(account != null){                              
      const APTOS_CONFIG = new AptosConfig({
        network: Network.DEVNET,
        // fullnode: "http://127.0.0.1:8080"        
      });
      

      const aptos = new Aptos(APTOS_CONFIG);

      console.log(`Sender account is  ${account.address} `)

      const commitedTransaction =  await signAndSubmitTransaction({
        sender: account.address,
        data: {
          // The Move entry-function
          function: "0xd58057486691cb9e339ce1a6d79906e88e2819f3a2ab83e3e6241a5059cb270e::woosh4::stake",
          functionArguments: ["500"],
        },
        options:{}
      });      
            
      const executedTransaction = await aptos.waitForTransaction(
        {
          transactionHash: commitedTransaction.hash,
        },
      );      
          
      console.log(executedTransaction)      

    }
  }
  
 
  return (
    <div>
      <h1>Aptos Wallet Connection</h1>
      {wallets.map(wallet=><p key={wallet.name}><img src={wallet.icon} width={32} height={32} />{wallet.name} <button onClick={()=>handleConnect2(wallet)}>Connect</button></p>)} 
      <div>
        {connected ? (
          <div>
            <button onClick={stake}>Stake</button>
            <button onClick={unstake}>Unstake</button>
            <button onClick={handleDisconnect}>Disconnect</button>
            
          </div>
        ) : (
          <button onClick={handleConnect}>Connect Wallet</button>
        )}
      </div>
    </div>
  );
};
 
export default WalletConnect;