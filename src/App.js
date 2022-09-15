import './App.css'
import { useEffect, useState } from 'react'
import ScrollToTop from './components/ScrollToTop'
import WebsiteLayout from './layouts/WebsiteLayout'
import HomePage from './pages/HomePage'
import Cities from './pages/Cities'
import NewCities from './pages/NewCities'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import CityDetails from './pages/CityDetails'
import MyTineraries from './pages/MyTineraries'
import Edit from './pages/Edit'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import UnderConstruction from './pages/SignIn'

function App() {

  const [logged, setLogged] = useState(false)
  const [admin, setAdmin] = useState(false)

  useEffect(() =>{
   JSON.parse(localStorage.getItem('user'))&&setLogged(true)
  JSON.parse(localStorage.getItem('user'))?.role==='admin' && setAdmin(true) 

  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <WebsiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/auth/signup" element={logged ? <HomePage /> : <SignUp />} />
          <Route path="/auth/signin" element={logged ? <HomePage /> : <SignIn />} />
          <Route path='/new_cities' element={admin ? <NewCities /> : <HomePage />}/>
          <Route path='/details/:id' element={<CityDetails />} />
          <Route path='/edit' element={admin ? <Edit /> : <HomePage />} />
          <Route path='/mytineraries' element={logged ? <MyTineraries /> : <HomePage />} />
          <Route path='*' element={<Error />}/>
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;