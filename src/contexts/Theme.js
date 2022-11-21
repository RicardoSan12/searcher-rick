import React, {createContext, useState} from 'react'

export const TemaContext = createContext()


const TemaProvider = ({children})=> {
  const [temita, setTemita] = useState('light')

  return(
    <section>
      <TemaContext.Provider value={{temita, changeTemita: setTemita}}>
        {children}
      </TemaContext.Provider>
    </section>
  )
}

export default TemaProvider
