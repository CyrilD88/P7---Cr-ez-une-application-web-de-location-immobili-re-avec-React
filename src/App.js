import Header from './layout/Navbar'
import Outlet from './Chemin'
import Footer from './layout/Footer'

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