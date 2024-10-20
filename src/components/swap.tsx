import { useState } from 'react'
import { TextBox } from './textbox'
import { TokenBox } from './tokenbox'
import { useStore } from '../store'
// import WalletConnect from './components/walletconnect'
function SwapPage() {
  const [sourceTokenAmount,setSourceTokenAmount]  = useState(0)
  const [sourceTokenPrice,setSourceTokenPrice] = useState(65000)
  const [sourceToken,setSourceToken] = useState('BTC')
  const onSourceTokenChanged = (newToken: string)=>{
    setSourceTokenAmount(newToken)
  }

  const [destTokenAmount,setDestTokenAmount]  = useState(0)
  const [destTokenPrice,setDestTokenPrice] = useState(10.14)
  const [destToken,setDestToken] = useState('APT')
  const onDestTokenChanged = (newToken: string)=>{
    setDestTokenAmount(newToken)
  }

  const appState = useStore()

  const swap = ()=>{
    console.log('Bitcoin pending....')
      appState.setPage('BitcoinPending')
  }


  return (
    <div>
      <TokenBox id='deposit' caption='You pay' token={sourceToken} tokenPrice={sourceTokenPrice} tokenAmount={sourceTokenAmount} onChange={onSourceTokenChanged} />
      <button className="rounded-md bg-slate-700 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 -960 960 960"  fill="#e8eaed"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z"/></svg>
      </button>
      <TokenBox  id='receive' caption='You receive' token={destToken} tokenPrice={destTokenPrice} tokenAmount={sourceTokenAmount * ( sourceTokenPrice / destTokenPrice)} onChange={onDestTokenChanged} />
      {/* <TextBox id='refund_address' caption='Refund Address' /> */}
      {/* <WalletConnect />    */}
      <TextBox id='destination_address' caption='Destination Address' />
      <button onClick={swap}>Swap</button>
    </div>
  )
}

export default SwapPage
