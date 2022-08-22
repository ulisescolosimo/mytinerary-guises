import './App.css';
import EventsCarousel from './components/EventsCarousel'
import WebsiteLayout from './layouts/WebsiteLayout'

function App() {
  return (
    <>
      <WebsiteLayout>
        <EventsCarousel />
      </WebsiteLayout>
    </>
  );
}

export default App;
