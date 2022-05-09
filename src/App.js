import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Editlist from './component/Editlist';
import Form from './component/Form';
import Formlist from './component/Formlist';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/list' element={<Formlist />} />
            <Route path='/edit/:id' element={<Editlist />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
