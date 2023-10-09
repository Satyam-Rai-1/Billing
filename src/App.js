
import './App.css';
import Billing from './billing/Billing';
import Dashboard from './dashboard/Dashboard';
import Master from './master/Master';
import Errorpage from './share/Errorpage';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/master' element={<Master/>}/>
        <Route path='/billing' element={<Billing/>}/>
        <Route path='*' element={<Errorpage/>}/>
      </Routes>
    
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
