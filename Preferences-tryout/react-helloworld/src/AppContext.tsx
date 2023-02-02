import React, { useEffect, useState } from 'react'
import { Share } from '@capacitor/share';

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

  },[])

  return(
    <AppContext.Provider value={ {hello:'world', networkStatus} }>
      {children}
    </AppContext.Provider>

  )
}

export  {AppContext, AppContextProvider}