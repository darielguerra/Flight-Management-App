//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateAFlight, FlightList, UpdateAFlight, Error} from './pages';
import { About } from './pages/About'; //had to import seperately with /About added
import { Navbar } from './components/navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './theme/Theme';

export const API = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <ThemeProvider theme={Theme}>
         <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<FlightList />} /> 
                    <Route path="/createaflight" element={<CreateAFlight />} />
                    <Route path="/flightlist" element={<FlightList />} />
                    <Route path="/updateaflight/:flightnumber" element={<UpdateAFlight />} /> 
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
         </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
