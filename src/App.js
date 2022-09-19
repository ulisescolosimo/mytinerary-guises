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
import CreateUsers from './pages/CreateUsers'
import NewItinerary from './pages/NewItinerary'
/* import UnderConstruction from './pages/UnderConstruction' */
import { useSelector, useDispatch } from 'react-redux';
import { loggedTrue } from './features/loggedSlice'

function App() {

    const logged = useSelector((state) => state.logged.loggedState)
    const dispatch = useDispatch()
    if (localStorage.length > 0) {
      dispatch(loggedTrue())
    }
    const role = JSON.parse(localStorage.getItem('userLogged'))?.role

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <WebsiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/auth/signup" element={logged ? <Error /> : <SignUp />} />
          <Route path="/auth/signin" element={logged ? <Error /> : <SignIn />} />
          <Route path='/new_cities' element={role === "admin" ? <NewCities /> : <HomePage />}/>
          <Route path='/create' element={role === "admin" ? <CreateUsers /> : <HomePage />} />
          <Route path='/details/:id' element={<CityDetails />} />
          <Route path='/edit' element={role === "admin" ? <Edit /> : <HomePage />} />
          <Route path='/mytineraries' element={logged ? <MyTineraries /> : <HomePage />} />
          <Route path='/new_itinerary' element={logged ? <NewItinerary /> : <HomePage />} />
          <Route path='*' element={<Error />}/>
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;