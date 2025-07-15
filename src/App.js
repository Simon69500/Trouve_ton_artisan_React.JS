import './App.css';


import Footer from './components/footer';
import Header from "./components/header";
import Home from './pages/Home';

import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}>Accueil</Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;