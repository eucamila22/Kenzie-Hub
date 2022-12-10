import { createContext, useState } from 'react'

export const TechContext = createContext({})

export const TechProvider = ({children}) => {
   const [openModal, setOpenModal] = useState(false)

   function modalIsOpen() {
    setOpenModal(true)
   }

   function modalIsClosed() {
    setOpenModal(false)
   }

     return (
        <TechContext.Provider value={{ modalIsOpen, modalIsClosed, setOpenModal, openModal }}>
            {children}
        </TechContext.Provider>
    )
}