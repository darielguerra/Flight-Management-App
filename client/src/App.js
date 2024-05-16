//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateAFlight, FlightList, UpdateAFlight, Error} from './pages';
import { Navbar } from './components/navbar/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3a3a3aff'
    },
    secondary: {
      main: '#e98074ff'
  }
}});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
