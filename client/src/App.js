import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Flights, Airports, Pilots, About, Error, CreateAFlight  } from './pages';
import { Navbar } from './components/global-components/navbar/Navbar';

export const API = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
         <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/createaflight" element={<CreateAFlight />} />
                    <Route path="/flights" element={<Flights />} />
                    <Route path="/airports" element={<Airports />} />
                    <Route path="/pilots" element={<Pilots />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>                
         </BrowserRouter>
  );
}

export default App;
