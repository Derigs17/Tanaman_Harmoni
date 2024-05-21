import { Routes, Route, } from 'react-router-dom'
import HomePage from './pages/HomePage' 
import Produk from './pages/Produk'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'


function App() {
 return (
    <div>
      <NavbarComponent/>
       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/produk" element={<Produk />} />
       </Routes>
        <FooterComponent/>
    </div>
  )
}

export default App
