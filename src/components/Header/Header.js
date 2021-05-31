import './Header.css';
import { NavLink } from 'react-router-dom';
import prof from '../../prof.png'
function Header() {



  return(
    <header>
      <div className="topBar">
        <h1 className="name">Connor Fakelastname</h1>
        <img className="headShot" src={prof} alt="headshot of Connor Fakelastname"/>
      </div>
      <div className="btmbox">
        <div className="links">
          <NavLink exact to='/' className="navBtn hovershdw" activeClassName="selected">Home</NavLink>
          <NavLink to='/About' className="navBtn hovershdw" activeClassName="selected">About</NavLink>
          <NavLink to='/Portfolio' className="navBtn hovershdw" activeClassName="selected">Portfolio</NavLink>
        </div>
      </div>
    </header>
  )

}

export default Header;
