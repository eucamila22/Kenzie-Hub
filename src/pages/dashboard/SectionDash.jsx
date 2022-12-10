import React, { useContext } from 'react'
import CardDash from './CardDash'
import { DivBtnDash, ListDash, SectionDashStyle } from './style'
import CreateTechModal from '../../components/Modal/CreateTechModal'
import { TechContext } from '../../contexts/TechContext'

const SectionDash = () => {

  const { modalIsOpen, openModal, setOpenModal } = useContext(TechContext)

  return (
    <SectionDashStyle>
        <DivBtnDash>
            <h2>Tecnologias</h2>
            <button onClick={() => setOpenModal(true)}>+</button>
            {openModal ? <CreateTechModal  modalIsOpen={modalIsOpen}/> : null}
        </DivBtnDash>
        <ListDash>
            <CardDash />
        </ListDash>

    </SectionDashStyle>
  )
}

export default SectionDash
