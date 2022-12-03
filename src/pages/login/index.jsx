import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { DivFormStyle, DivImg } from './style'
import { loginSchema } from './loginSchema'

const LoginPage = ({userLogin, loading}) => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: 'onBlur',
        defaultValues: {
          name: '',
          email: '',
          password: '',
          passwordConfirm: '',
          bio: '',
          contact: '',
          course_module: ''
        },
        resolver: yupResolver(loginSchema)
    })

    const submit = async (data) => {
        await userLogin(data)
        setTimeout(() => {
            navigate(`/dashboard`)
        }, 5000)
        reset()
    }

  return (
    <>
        <DivImg>
            <img src={Logo} alt='Logo Kenzie Hub' />   
        </DivImg>
        <DivFormStyle>

            <h2>Login</h2>

            <form onSubmit={handleSubmit(submit)} noValidate>

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' placeholder='Digite aqui seu e-mail' {...register('email')}/>
                <div>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <label htmlFor='password'>Senha</label>
                <input type='password' id='password' placeholder='Digite aqui sua senha' {...register('password')}/>
                <div>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button type='submit' disabled={loading}>
                    {loading ? 'Entrando...' : 'Entrar'}
                </button>

            </form>

            <div>
                <p>Ainda não possui uma conta?</p>
                <Link to={`/register`}>Cadastre-se</Link> 
            </div>
        </DivFormStyle>
    </>

  )
}

export default LoginPage
