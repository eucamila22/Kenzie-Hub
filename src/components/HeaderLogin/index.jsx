import React from 'react'
import Logo from '../../assets/Logo.svg'
import { DivImg } from '../../components/HeaderLogin/style.js'


const HeaderLogin = () => {
  return (
    <DivImg>
        <img src={Logo} alt='Logo Kenzie Hub' />   
    </DivImg>
  )
}

export default HeaderLogin
