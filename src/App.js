import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard';
import Editlist from './component/Editlist';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/edit/:id' element={<Editlist />} />
            <Route path='/' element={<Dashboard />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
