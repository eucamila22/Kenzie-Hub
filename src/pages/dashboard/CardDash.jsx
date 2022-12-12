import React, { useContext } from 'react'
import ModalTechEditDelete from '../../components/Modal/EditDeleteModal'
import { TechContext } from '../../contexts/TechContext'
import { LiCardDash } from './style'

const CardDash = ({ e }) => {
   const { modalIsOpenEditDelete, openModalEditDelete } = useContext(TechContext)
   const { setOpenModalEditDelete } = useContext(TechContext)

   return (
   <LiCardDash key={e.id} onClick={() => setOpenModalEditDelete(true)}>
         <p>{e.title}</p>
         <small>{e.status}</small>
         {openModalEditDelete ? (
               <ModalTechEditDelete modalIsOpenEditDelete={modalIsOpenEditDelete} />
            ) : null} 
      </LiCardDash>
   )
}

export default CardDash
