//import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio'

function App() {
  return (
    <>
    <BrowserRouter> 
      <div className="App">

      <header className="App-header">
      <NavBar></NavBar>
      </header>

      <main>
      <Routes>
      <Route exact path="/inicio" element={<Inicio/>}/>  
      </Routes>

      </main>
    </div>
    </BrowserRouter>

    </>

  );
}

export default App;
