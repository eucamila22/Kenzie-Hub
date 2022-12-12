import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TechContext } from '../../../contexts/TechContext'
import { techRegisterSchema } from '../../../Schema/techRegisterSchema'
import BoxModal from '../BoxModal'
import ContainerModal from '../ContainerModal'
import { FormRegister, HeaderModalRegister } from './style'

const ModalTechRegistration = () => {
   const { modalIsClosed, loadingRegister, techRegister } = useContext(TechContext)

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      mode: 'onBlur',
      defaultValues: {
         title: '',
         status: '',
      },
      resolver: yupResolver(techRegisterSchema),
   })

   const submit = async (data) => {
      const newData = { ...data }
      await techRegister(newData)
      reset()
   }

   return (
      <BoxModal>
         <ContainerModal>
            <HeaderModalRegister>
               <p>Cadastrar Tecnologia</p>
               <button
                  className='closeBtnRegister'
                  onClick={() => modalIsClosed(true)}
               >
                  X
               </button>
            </HeaderModalRegister>
            <FormRegister onSubmit={handleSubmit(submit)} noValidate>
               <div className='divInput'>
                  <label htmlFor='title'>Nome</label>
                  <input
                     type='text'
                     name='title'
                     id='title'
                     placeholder='Digite o nome da tech aqui...'
                     {...register('title')}
                     disabled={loadingRegister}
                  />
                  <div>
                     {errors.title && (
                        <small className='error'>{errors.title.message}</small>
                     )}
                  </div>
               </div>

               <div className='divInput'>
                  <label htmlFor='status'>Nome</label>
                  <select
                     name='status'
                     id='status'
                     {...register('status')}
                     disabled={loadingRegister}
                  >
                     <option value=''>Selecione</option>
                     <option value='Iniciante'>Iniciante</option>
                     <option value='Intermediário'>Intermediário</option>
                     <option value='Avançado'>Avançado</option>
                  </select>
                  <div>
                     {errors.status && (
                        <small className='error'>{errors.status.message}</small>
                     )}
                  </div>
               </div>

               <div className='divBtnRegister'>
                  <button className='btnRegister' disabled={loadingRegister}>
                     {loadingRegister ? 'Cadastrando...' : 'Cadastrar'}
                  </button>
               </div>
            </FormRegister>
         </ContainerModal>
      </BoxModal>
   )
}

export default ModalTechRegistration
