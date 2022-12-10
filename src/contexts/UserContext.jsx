import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../service/api'

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const [loading, setLoading] = useState(false)
    const [userLoading, setUserLoading] = useState(true)
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        async function authUser() {
            const tokenValidation = localStorage.getItem('@TOKEN')

            if(!tokenValidation) {
                setLoading(false)
                return
            }

            try {
                const response = await api.get('/profile', {
                    headers: {
                        authorization: `Bearer ${tokenValidation}`
                    }
                })
                setUser(response.data)
            }catch(err) {
                console.log(err)
            }finally{
                setUserLoading(false)
            }
        }
        authUser()
    
    }, [])

    const userLogin = async (data) => {
        try{
          setLoading(true)
          const response = await api.post('sessions', data)
          localStorage.setItem('@USERID', response.data.user.id)
          const {token, user: userResponse} =response.data
          setUser(userResponse)
          localStorage.setItem('@TOKEN', token)
          toast.success('Login realizado com sucesso!')
          setTimeout(() => {
            navigate(`/dashboard`)
          }, 2000) 
        }catch(err){
            setTimeout(() => {
                navigate('/')
              }, 2000)
          toast.error('Houve um erro!')
        }finally{
          setLoading(false)
        }  
      }

      const userRegister = async (data) => {
        try {
          setLoading(true)
          const response = await api.post("users", data)
          console.log(response)
          toast.success("Cadastro realizado com sucesso!")
          setTimeout(() => {
            navigate(`/`)
          }, 5000)
        } catch (err) {
          console.log(err)
          toast.error(err.response.data.message)
        } finally {
          setLoading(false)
        }
      }
    
    return (
        <UserContext.Provider value={{userLogin, loading, setLoading, user, setUser, userRegister, userLoading }}>
            {children}
        </UserContext.Provider>
    )
}

