import React from 'react'
import { BoxModalS } from './styled'

const BoxModal = ({ children }) => {
   return (
    <BoxModalS>
      {children}
    </BoxModalS>
  )
}

export default BoxModal
