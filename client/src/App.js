import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './flags.css';


function App() {
  return (
    <div className="App">
      <PrimeReactProvider >
      <Home/>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
