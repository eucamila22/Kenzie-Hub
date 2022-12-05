import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { ContainerDash, DivDahs, HeaderDash, NavBar, SectionDash } from './style'

const DasboardPage = ({user}) => {
  return (
    <DivDahs>
    <ContainerDash>
      <NavBar>
        <img src={Logo} alt='Logo Kenzie Hub' /> 
        <Link to={`/`} onClick={() => {
          user = null;
          localStorage.removeItem('@TOKEN');
          localStorage.removeItem('@USERID')
        }}>
          Sair
        </Link>     
      </NavBar>
      </ContainerDash>
      <HeaderDash>
        <div>
          <p>Olá, {user.user.name}</p>
          <small>{user.user.course_module}</small>
        </div>
      </HeaderDash>
    <ContainerDash>

      <SectionDash>
        <p>Que pena! Estamos em desenvolvimento :(</p>
        <small>Nossa aplicação está em desenvolvimento, em breve teremos novidades</small>
      </SectionDash>
    </ContainerDash>
    </DivDahs>
  )
}

export default DasboardPage
