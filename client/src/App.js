//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, CreateAFlight, EditAFlight, UpdateAFlight, Error} from './pages';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
                <Navbar />
                <Routes>
                    {/*<Route path="/" element={<Home />} /> */}
                    <Route path="/" element={<EditAFlight />} /> 
                    <Route path="/createaflight" element={<CreateAFlight />} />
                    <Route path="/editaflight" element={<EditAFlight />} />
                    <Route path="/updateaflight/:flightnumber" element={<UpdateAFlight />} /> 
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
  );
}

export default App;
