import './App.css';

import Footer from './components/footer';
import Header from "./components/header";
import ArtisanFiche from './pages/ArtisanFiche';
import Home from './pages/Home';
import Error from './pages/Error';
import ArtisansParCategory from './components/artisansParCategory';
import SearchArtisans from './components/searchArtisan';

import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
    <Header/>

    <Routes>
      {/*Page Menu*/}
      <Route path='/' element={<Home/>}/>
      <Route path='/categories/:id/artisans' element={<ArtisansParCategory/>}/>
      
      {/*Page autres*/}
      <Route path='/artisans/:id' element={<ArtisanFiche/>}/>
      <Route path='/search' element={<SearchArtisans/>}/> 

      {/*Page Erreur 404*/}
      <Route path='*' element={<Error/>}/>

    </Routes>

    <Footer/>
    </div>
  );
}

export default App;