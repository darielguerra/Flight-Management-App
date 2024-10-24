import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, CreateAFlight, About, Error  } from './pages';
import { Navbar } from './components/global-components/navbar/Navbar';

export const API = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
         <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} /> 
                    <Route path="/createaflight" element={<CreateAFlight />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>                
         </BrowserRouter>
  );
}

export default App;
