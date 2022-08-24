import './App.css'
import ScrollToTop from './components/ScrollToTop'
import WebsiteLayout from './layouts/WebsiteLayout'
import Cities from './pages/Cities'
import HomePage from './pages/HomePage'
import UnderConstruction from './pages/UnderConstruction'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewCities from './pages/NewCities'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <WebsiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cities" element={<Cities />} />
          <Route path='/new_cities' element={<NewCities />}/>
          <Route path='*' element={<UnderConstruction />}/>
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
