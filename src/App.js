import LoginPage from './pages/login'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/register'
import DasboardPage from './pages/dashboard'
import GlobalStyles, { Container } from './styles/globalStyles'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NotFound from './pages/NotFound'
import { UserProvider } from './contexts/UserContext'
import { TechProvider } from './contexts/TechContext'

const App = () => {

  return (
    <Container>
      
      <UserProvider>        
        <TechProvider>
          <Routes>
            <Route path='/' element={<LoginPage />}/>      
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/dashboard' element={<DasboardPage />}/>
            <Route path='*' element={<NotFound />} />
          </Routes>  
        </TechProvider>
      </UserProvider>

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
