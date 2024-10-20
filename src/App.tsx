import './App.css'
import BitcoinDeposit from './components/bitcoindeposit'
import SwapPage from './components/swap'
import { useStore } from './store'

function App() {
  const store= useStore();
  return (
    <>
      {store.page == 'Swap' && <SwapPage />}
      {store.page == 'BitcoinPending' && <BitcoinDeposit address='1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' amount='100' label='' message='' status='Pending' />}
    </>
  )
}

export default App
