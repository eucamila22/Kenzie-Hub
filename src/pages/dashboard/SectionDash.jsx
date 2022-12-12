import React, { useContext } from 'react'
import ModalTechRegistration from '../../components/Modal/CreateTechModal'
import { TechContext } from '../../contexts/TechContext'
import CardDash from './CardDash'
import { DivBtnDash, ListDash, SectionDashStyle } from './style'

const SectionDash = () => {
   const { modalIsOpen, openModalRegister, setOpenModalRegister, techs } =
      useContext(TechContext)
   return (
      <SectionDashStyle>
         <DivBtnDash>
            <h2>Tecnologias</h2>
            <button onClick={() => setOpenModalRegister(true)}>+</button>
            {openModalRegister ? (
               <ModalTechRegistration modalIsOpen={modalIsOpen} />
            ) : null}
         </DivBtnDash>
         <ListDash>
          {techs.map((e) => (
            <CardDash key={e.id} e={e}/>
          ))} 
         </ListDash>
      </SectionDashStyle>
   )
}

export default SectionDash
