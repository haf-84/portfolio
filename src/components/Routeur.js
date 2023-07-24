import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Home from './Home';

import Page404 from './Page404';
import About from './About';
import CardDetails from './CardDetails';


function Routeur(){
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path='/card/:id' element={<CardDetails/>} />
        <Route path="/404" element={<Page404/>} />
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </Router>
  )
}

export default Routeur