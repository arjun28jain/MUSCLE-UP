import Link from 'next/link';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Exercises from './components/Exercises'
import Cardio from './components/Cardio';
import Muscle from './components/Muscle';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/footer" element={<Footer />} />
          <Route exact path="/Cardio" element={<Cardio />} />
          <Route exact path="/Muscle" element={<Muscle/>} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/exercises" element={<Exercises />} />
          <Route path="*" element={<NoPage />} />
      
      </Routes>
    </BrowserRouter>
     
     
    </div>
 
  );
  
}

export default App;
