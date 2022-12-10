import React from 'react'
import { BoxContainerModal, ContainerModal } from '../CreateTechModal/style'

const EditDeleteModal = () => {
  return (
    <BoxContainerModal>    
      <ContainerModal>
         <header>
            <p>Tecnologia - Detalhes</p>
            <span>X</span>
         </header>
         <form>
            <div>
               <label htmlFor='name'>Nome</label>
               <input type='text' placeholder='Digite o nome da tech aqui...' />
            </div>
            <div>
               <label htmlFor='status'>Nome</label>
               <select name='status' id='status'>
                  <option value=''>Selecione</option>
                  <option value='Iniciante'>Iniciante</option>
                  <option value='Intermediário'>Intermediário</option>
                  <option value='Avançado'>Avançado</option>
               </select>
            </div>
            <div className='divBtnEditDelete'>
                <button className='save'>Salvar alterações</button>   
                <button className='delete'>Excluir</button>   
            </div>
         </form>
      </ContainerModal>
    </BoxContainerModal>
  )
}

export default EditDeleteModal
