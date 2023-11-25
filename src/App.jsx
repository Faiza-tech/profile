
import './App.css'
import ContactUs from './components/ContactUs'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home' 
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import MyProject from './components/Projects'
import Menu from './components/Menu'

function App() {


  return (
    <>

      <div className='container-layout'>
        <Header />
        <main>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/home' element={<Home />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/projects' element={<MyProject />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </>
  )
}

export default App
