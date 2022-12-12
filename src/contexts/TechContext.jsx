import { useContext } from 'react'
import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../service/api'
import { UserContext } from './UserContext'

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
   const [loadingRegister, setLoadingRegister] = useState(false)
   const [loadingEditDelete, setLoadingEditDelete] = useState(false)
   const [openModalRegister, setOpenModalRegister] = useState(false)
   const [openModalEditDelete, setOpenModalEditDelete] = useState(false)
   const { authUser, user } = useContext(UserContext)
   const techs = user?.techs

   function modalIsOpen() {
      setOpenModalRegister(true)
   }

   function modalIsClosed() {
      setOpenModalRegister(false)
   }

   function modalIsOpenEditDelete() {
    setOpenModalEditDelete(true)
   }

   function modalIsClosedEditDelete() {
    setOpenModalEditDelete(false)
   }

   const techRegister = async (data) => {
      try {
         setLoadingRegister(true)
         await api.post('users/techs', data)
         authUser()
         toast.success('Tecnologia cadastrada com sucesso!')
      } catch (error) {
         toast.error('Erro! Tente novamente!')
      } finally {
         setLoadingRegister(false)
      }
   }

   return (
      <TechContext.Provider
         value={{
            modalIsOpen,
            modalIsClosed,
            loadingRegister,
            setLoadingRegister,
            openModalRegister,
            setOpenModalRegister,
            techRegister,
            techs,
            openModalEditDelete,
            setOpenModalEditDelete,
            modalIsOpenEditDelete,
            modalIsClosedEditDelete,
            loadingEditDelete,
            setLoadingEditDelete
         }}
      >
         {children}
      </TechContext.Provider>
   )
}
