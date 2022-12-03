import React from 'react'
import NotFoundImage from '../../assets/notfound.webp'
import { DivNotFound } from './style'

const NotFound = () => {
  return (
    <DivNotFound>
      <img src={NotFoundImage} alt="Not Found" />
    </DivNotFound>
  )
}

export default NotFound
