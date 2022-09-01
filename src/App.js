import './App.css'
import ScrollToTop from './components/ScrollToTop'
import WebsiteLayout from './layouts/WebsiteLayout'
import HomePage from './pages/HomePage'
import Cities from './pages/Cities'
import NewCities from './pages/NewCities'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import CityDetails from './pages/CityDetails'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <WebsiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cities" element={<Cities />} />
          <Route path='/new_cities' element={<NewCities />}/>
          <Route path='/details/:id' element={<CityDetails />} />
          <Route path='*' element={<Error />}/>
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
