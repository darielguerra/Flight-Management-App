//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateAFlight, FlightList, UpdateAFlight, Error} from './pages';
import { Navbar } from './components/navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './theme/Theme';

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
                    <Route path="*" element={<Error />} />
                </Routes>
         </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
