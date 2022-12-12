import React from 'react'
import { ContainerModalS } from './style'

const ContainerModal = ({children}) => {
  return (
    <ContainerModalS>
      {children}
    </ContainerModalS>
  )
}

export default ContainerModal
