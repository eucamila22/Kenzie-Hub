import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../Schema/registerSchema.js'
import { yupResolver } from '@hookform/resolvers/yup'
import { DivFormRegisterStyle } from './style'
import HeaderRegister from '../../components/HeaderRegister'
import { UserContext } from '../../contexts/UserContext.jsx'

const RegisterPage = () => {
   const { userRegister, loading } = useContext(UserContext)

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      mode: 'onBlur',
      defaultValues: {
         name: '',
         email: '',
         password: '',
         passwordConfirm: '',
         bio: '',
         contact: '',
         course_module: '',
      },
      resolver: yupResolver(registerSchema),
   })

   const submit = async (data) => {
      console.log(data)
      const newData = { ...data }
      delete newData.passwordConfirm
      await userRegister(newData)
      reset()
   }

   return (
      <>
         <HeaderRegister />
         <DivFormRegisterStyle>
            <p>Crie sua conta</p>
            <small>Rapido e grátis, vamos nessa</small>

            <form onSubmit={handleSubmit(submit)} noValidate>
               <label htmlFor='name'>Nome</label>
               <input
                  disabled={loading}
                  type='name'
                  id='name'
                  placeholder='Digite aqui seu nome'
                  {...register('name')}
               />
               <div>{errors.name && <span>{errors.name.message}</span>}</div>

               <label htmlFor='email'>E-mail</label>
               <input
                  disabled={loading}
                  type='email'
                  id='email'
                  placeholder='Digite aqui seu e-mail'
                  {...register('email')}
               />
               <div>{errors.email && <span>{errors.email.message}</span>}</div>

               <label htmlFor='password'>Senha</label>
               <input
                  disabled={loading}
                  type='password'
                  id='password'
                  placeholder='Crie aqui sua senha'
                  {...register('password')}
               />
               <div>
                  {errors.password && <span>{errors.password.message}</span>}
               </div>

               <label htmlFor='passwordConfirm'>Confirmar Senha</label>
               <input
                  disabled={loading}
                  type='password'
                  id='passwordConfirm'
                  placeholder='Confirme sua senha'
                  {...register('passwordConfirm')}
               />
               <div>
                  {errors.passwordConfirm && (
                     <span>{errors.passwordConfirm.message}</span>
                  )}
               </div>

               <label htmlFor='bio'>Bio</label>
               <input
                  disabled={loading}
                  type='text'
                  id='bio'
                  placeholder='Digite aqui sua bio'
                  {...register('bio')}
               />
               <div>{errors.bio && <span>{errors.bio.message}</span>}</div>

               <label htmlFor='contact'>Contato</label>
               <input
                  disabled={loading}
                  type='text'
                  id='contact'
                  placeholder='Opção de contato'
                  {...register('contact')}
               />
               <div>
                  {errors.contact && <span>{errors.contact.message}</span>}
               </div>

               <label htmlFor='course_module'>Selecionar Módulo</label>
               <select id='course_module' {...register('course_module')}>
                  <option value=''>Escolha o Módulo</option>
                  <option value='Primeiro módulo (Introdução ao Frontend)'>
                     Primeiro módulo (Introdução ao Frontend)
                  </option>
                  <option value='Segundo módulo (Frontend Avançado)'>
                     Segundo módulo (Frontend Avançado)
                  </option>
                  <option value='Terceiro módulo (Introdução ao Backend)'>
                     Terceiro módulo (Introdução ao Backend)
                  </option>
                  <option value='Quarto módulo (Backend Avançado)'>
                     Quarto módulo (Backend Avançado)
                  </option>
               </select>
               <div>
                  {errors.course_module && (
                     <span>{errors.course_module.message}</span>
                  )}
               </div>

               <button type='submit' disabled={loading}>
                  {loading ? 'Cadastrando...' : 'Cadastrar'}
               </button>
            </form>
         </DivFormRegisterStyle>
      </>
   )
}

export default RegisterPage
