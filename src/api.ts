import { Token } from "./enums"

const fetchTokenPriceInUSD = async (token: Token)=>{
    switch(token){
        case "APT":
            return 9.76;
        case "BNB":
            return 597.63;
        case "BTC":
            return 68403.97;
        case "USDT": 
            return 0.9998;
        case "USDC":
            return 0.9999;
        case "SOL":
            return 159.04;
        case "ETH":
            return 2646.56;
        case "DOGE":
            return 0.1432;        
    }
}

export {fetchTokenPriceInUSD}