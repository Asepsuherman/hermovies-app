import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Navbar from './Component/Navbar';
import Movies from './routes/Movies';
import Footer from './Component/Footer';
import { useState } from 'react';
import Detailmovies from './Component/Detailmovies';

function App() {
  const [filter, setFilter] = useState();
  const [Search, setSearch] = useState();

  return (
    <BrowserRouter>
      <Navbar setFil={setFilter} setCari={setSearch} />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/movies' element={<Movies fil={filter} hasilCari={Search} />} />
        <Route path='/movies/:id' element={<Detailmovies />} />
        <Route />

        <Route path='/filter' />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
