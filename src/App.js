import './App.css';
import Footer from './components/footer';
import Header from "./components/header";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
