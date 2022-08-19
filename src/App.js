import './App.css';
import Welcome from './pages/Welcome'
/* import Footer from './components/Footer' */
import EventsCarousel from './components/EventsCarousel'
import WebsiteLayout from './layouts/WebsiteLayout';

function App() {
  return (
    <>
      <Welcome />
      <EventsCarousel />
      <WebsiteLayout />
    </>
  );
}

export default App;
