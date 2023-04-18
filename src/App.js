import Header from './layout/Navbar'
import Outlet from './Chemin'
import Footer from './layout/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App