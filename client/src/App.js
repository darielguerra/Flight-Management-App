import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { CreateAFlight } from './pages/create-flight';
import { UpdateAFlight } from './pages';
import { Error } from './pages/error';
import { About } from './pages/about/About'; 
import { Navbar } from './components/navbar/Navbar';

export const API = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
         <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} /> 
                    <Route path="/createaflight" element={<CreateAFlight />} />
                    {/*<Route path="/flightlist" element={<HomePage />} />*/}
                    <Route path="/updateaflight/:flightnumber" element={<UpdateAFlight />} />  
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
         </BrowserRouter>
  );
}

export default App;
