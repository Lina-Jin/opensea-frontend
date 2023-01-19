import Web3 from "web3";
import { createContext,PropsWithChildren,useEffect,useState,useCallback } from "react";
import Axios from "axios";

declare const window:any;
declare const ethereum:any;


interface IWalletContext{
  web3: Web3 | null;
  account: string;
  login: ()=> void
}

export const WalletContext = createContext<IWalletContext>({
  web3: null,
  account:'',
  login: ()=> {}
})

const axios = Axios.create({
  baseURL: "http://localhost:3000",
})

export const WalletContextProvider = ({
  children,
}:PropsWithChildren) =>{
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState('')

  const login = useCallback(async ()=>{
    if(typeof window.ethereum === 'undefined'){
      console.log('metamask not installed')
      return;
    }

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    const account = accounts[0]

    const web3= new Web3(window.ethereum)
    setWeb3(web3)

    //서버 호출하여 서명메세지 받기
    const authRequest = await axios.get(`/auth/${account.replace("0x","")}`)

    //서명요청
    const result= await web3.eth.personal.sign(authRequest.data.message, account,"")
    console.log(result)
  },[])

  return (
  <WalletContext.Provider value ={{web3,account,login}}>
    {children}
  </WalletContext.Provider>
  );
}
