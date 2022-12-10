import React, { useContext } from 'react'
import { TechContext } from '../../../contexts/TechContext'
import { BoxContainerModal, ContainerModal } from './style'

const CreateTechModal = () => {
   const { modalIsClosed } = useContext(TechContext)

   return (
    <BoxContainerModal>    
      <ContainerModal>
         <header>
            <p>Cadastrar Tecnologia</p>
            <button className='closeModal' onClick={() => modalIsClosed(true)}>X</button>
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
            <div className='divBtn'>
                <button>Cadastrar Tecnologia</button>   
            </div>
         </form>
      </ContainerModal>
    </BoxContainerModal>
   )
}

export default CreateTechModal
