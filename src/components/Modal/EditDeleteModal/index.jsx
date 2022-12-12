import React from 'react'
import BoxModal from '../BoxModal'
import ContainerModal from '../ContainerModal'
import { FormEditDelete, HeaderModalEditDelete } from './style'

const ModalTechEditDelete = () => {

   return (
      <BoxModal>
         <ContainerModal>
            <HeaderModalEditDelete>
               <p>Tecnologia - Detalhes</p>
               <button
                  className='closeBtnEditDelete'
               >
                  X
               </button>
            </HeaderModalEditDelete>
            <FormEditDelete>
               <div className='divInputEditDelete'>
                  <label htmlFor='title'>Nome</label>
                  <input
                     type='text'
                     name='title'
                     id='title'
                     placeholder='Digite o nome da tech aqui...'
                  />
                  {/* <div>
                     {errors.title && (
                        <small className='errorEditDelete'>
                           {errors.title.message}
                        </small>
                     )}
                  </div> */}
               </div>

               <div className='divInputEditDelete'>
                  <label htmlFor='status'>Nome</label>
                  <select name='status' id='status'>
                     <option value=''>Selecione</option>
                     <option value='Iniciante'>Iniciante</option>
                     <option value='Intermediário'>Intermediário</option>
                     <option value='Avançado'>Avançado</option>
                  </select>
                  {/* <div>
                     {errors.status && (
                        <small className='errorEditDelete'>
                           {errors.status.message}
                        </small>
                     )}
                  </div> */}
               </div>

               <div className='divBtnEditDelete'>
                  <button className='btnEdit'>
                     {' '}
                     Salvando...
                     {/* {loadingRegister ? 'Salvando...' : 'Salvo'} */}
                  </button>
                  <button className='btnDelete'>
                     Exluindo...
                     {/* {loadingRegister ? 'Excluindo...' : 'Excluído'} */}
                  </button>
               </div>
            </FormEditDelete>
         </ContainerModal>
      </BoxModal>
   )
}

export default ModalTechEditDelete
