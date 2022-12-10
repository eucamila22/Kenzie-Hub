import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { ContainerDash, DivDahs, HeaderDash, NavBar } from './style'
import SectionDash from './SectionDash'
import { UserContext } from '../../contexts/UserContext'

const DasboardPage = () => {
   const { user, userLoading } = useContext(UserContext)

   if (userLoading) {
      return null
   }
   return user ? (
      <DivDahs>
         <ContainerDash>
            <NavBar>
               <img src={Logo} alt='Logo Kenzie Hub' />
               <Link
                  to={`/`}
                  onClick={() => {
                     user.user = null
                     localStorage.removeItem('@TOKEN')
                     localStorage.removeItem('@USERID')
                  }}
               >
                  Sair
               </Link>
            </NavBar>
         </ContainerDash>
         <HeaderDash>
            <div>
               <p>Olá, {user.name}</p>
               <small>{user.course_module}</small>
            </div>
         </HeaderDash>
         <ContainerDash>
            <SectionDash/>
         </ContainerDash>
      </DivDahs>
   ) : (
      <Navigate to={'/'} />
   )
}

export default DasboardPage
