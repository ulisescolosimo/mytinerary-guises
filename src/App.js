import './App.css';
import Welcome from './pages/Welcome'
import Footer from './components/Footer'
import EventsCarousel from './components/EventsCarousel'
import UnderConstruction from './pages/UnderConstruction'

function App() {
  return (
    <>
      <Welcome />
      <EventsCarousel />
      <UnderConstruction />
      <Footer />
    </>
  );
}

export default App;
