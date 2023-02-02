import React, { useEffect, useState } from 'react'
import { Network } from '@capacitor/network';

interface contextProps {
  hello:string
  networkStatus:{}
}

const AppContext = React.createContext<contextProps>({
  hello:'',
  networkStatus:{}
});


function AppContextProvider({children}:{children: React.ReactNode}){
  let [networkStatus, setNetworkStatus] = useState({})

  useEffect(() =>{
    Network.addListener('networkStatusChange', status => {
      setNetworkStatus(status)
    });

    return(()=>{
      Network.removeAllListeners()
    })
  },[])
  return(
    <AppContext.Provider value={ {hello:'world', networkStatus} }>
      {children}
    </AppContext.Provider>

  )
}

export  {AppContext, AppContextProvider}