import './App.css';


import Footer from './components/footer';
import Header from "./components/header";
import ArtisanCard from './pages/ArtisanCard';
import ArtisanFiche from './pages/ArtisanFiche';
import Home from './pages/Home';
import Error from './pages/Error';
import ArtisansParCategory from './components/artisansParCategory';

import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}>Accueil</Route>
      <Route path='/categories/:id/artisans' element={<ArtisansParCategory/>}/>
      <Route path='/artisans' element={<ArtisanCard/>}>Artisans</Route>
      <Route path='/artisans/:id' element={<ArtisanFiche/>}/>
      <Route path='/erreur' element={<Error/>}>Erreur 404</Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;