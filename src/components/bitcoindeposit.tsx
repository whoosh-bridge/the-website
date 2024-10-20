import { QRCode } from 'react-qrcode-logo';
import ReactLoading from 'react-loading';
import { useStore as useAppStore } from '../store';

type TransactionStatus = 'Pending' | 'Confirming' | 'Bridging' | 'Completed'

const  BitcoinDeposit = (props: {address:string,amount: string,label: string,message: string,status: TransactionStatus,blocksConfirmed?: number})=>{

    const appState = useAppStore()

    const back = ()=>{
        appState.setPage('Swap')
    }
  

    async function copyToClipboard(text: string) {
        try {
          await navigator.clipboard.writeText(text);
          console.log('Text copied to clipboard');
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
    }

    let message ='' 

    switch(props.status){
        case 'Confirming':
            message = `${props.blocksConfirmed} of 3 blocks confirmed`
            break;
        case 'Pending':
            message = `Waiting for deposit`
            break
        case 'Bridging':
            message = `Briding funds`
            break
        case 'Completed':
            message = `Bridging completed.`
            break
    }

    return (
        <div className='flex flex-col items-center'>
            <button onClick={back}>Back</button>
            <div>Send {props.amount} BTC</div>
            <QRCode value={ `bitcoin:${props.address}?amount=${props.amount}&label=${props.label}&message=${props.message}`} />  
            <div>{props.address}</div>  
            <a href='#' onClick={(ev)=>copyToClipboard(ev.currentTarget.previousElementSibling!.innerHTML)}>Copy Address</a>           

            <div className="flex flex-row items-center">
                <div className='mr-2'>{message}</div>
                {props.status && <ReactLoading type={'cubes'} color={'#ffffff'}   />} 
            </div>
        </div>
    )
}

export default BitcoinDeposit;