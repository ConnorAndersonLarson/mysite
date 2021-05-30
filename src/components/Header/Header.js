import './Header.css';
import { Navlink } from 'react-router-dom';
import prof from './prof.png'
function Header() {



  return(
    <header>
      <div className="topBar">
        <h1 className="name">Connor Fakelastname</h1>
      </div>
      <img />
      <NavLink to='/' className="navBtn" activeClassName="selected">Home</NavLink>
      <NavLink to='/About' className="navBtn" activeClassName="selected">About</NavLink>
      <NavLink to='/Portfolio' className="navBtn" activeClassName="selected">Portfolio</NavLink>
    </header>
  )

}
