import LoginPage from './pages/login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import RegisterPage from './pages/register'
import DasboardPage from './pages/dashboard'
import GlobalStyles, { Container } from './styles/globalStyles'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react'
import { api } from './service/api'
import NotFound from './pages/NotFound'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()


  const userLogin = async (data) => {
    try{
      setLoading(true)
      const response = await api.post('sessions', data)
      localStorage.setItem('@TOKEN', response.data.token)
      localStorage.setItem('@USERID', response.data.user.id)
      setUser(response.data)
      toast.success('Login realizado com sucesso!')
      setTimeout(() => {
        navigate(`/dashboard`)
      }, 4000)  
    }catch(err){
      toast.error('Houve um erro!')
    }finally{
      setLoading(false)
    }  
  }

  return (
    <Container>
      <Routes>
        <Route path='/' element={<LoginPage userLogin={userLogin} loading={loading}/>}/>      
        <Route path='/register' element={<RegisterPage setLoading={setLoading} loading={loading}/>}/>
        <Route path='/dashboard' element={<DasboardPage user={user}/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>  
      <GlobalStyles/>
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Container>
  )
}

export default App
