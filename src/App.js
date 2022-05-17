import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Addstudent from './components/Addstudent';
import Searchstudent from './components/Searchstudent';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <div>
      <Navbar/>
     <BrowserRouter>
     <Routes>
<Route path="/" exact element={<Addstudent/>}/>
<Route path="/search" exact element={<Searchstudent/>}/>

     </Routes>
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
