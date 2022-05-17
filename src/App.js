import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Addstudent from './components/Addstudent';
import Searchstudent from './components/Searchstudent';
import Navbar from './components/Navbar';
import Viewbook from './components/Viewbook';
function App() {
  return (
    <>
    
    <BrowserRouter>
<Routes>
<Route path='/' exact element={<Addstudent/>}/>
<Route path='/search' exact element={<Searchstudent/>}/>
<Route path="/viewbook" exact element={<Viewbook/>}/>


</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
