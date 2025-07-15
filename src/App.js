import './App.css';
import Footer from './components/footer';
import Header from "./components/header";

import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}>Accueil</Route>
    </Routes>
    <Header />
    <Footer/>
    </div>
  );
}

export default App;