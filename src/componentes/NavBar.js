import '../App.css';
//import logo from '../logocazasinfondo.png';
import { Link } from 'react-router-dom';


//Armo la barra de navegación
const NavBar = () => {
    
  return ( 
    <main>  
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="navbar navbar-expand-lg navbar-light">
                    <ul className="brand"> <Link className="dropdown-item" to='/'>Quinta La Mary</Link></ul>
                    <ul><Link className="dropdown-item" to='/inicio'>Inicio</Link></ul>
                    <ul><Link className="dropdown-item" to='/fechas'> Fechas</Link></ul>
              </nav>
          <form className="d-flex">
        </form>
    </div>
  

</main>
    
  )
}
export default NavBar
