import './Header.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [photo, setPhoto] = useState('/me/3.jpg');

  const randomPhoto = () => {
    setPhoto(`/me/${Math.floor(Math.random()*4)}.jpg`)
  }

  return(
    <header>
      <div className="topBar">
        <h1 className="name">Connor Anderson-Larson</h1>
        <img className="headShot" src={photo} alt="Connor Anderson-Larson. White male, blue eyes, brown hair below shoulders, tall."/>
      </div>
      <div className="btmbox">
        <div className="links">
          <NavLink exact to='/' className="navBtn hovershdw" activeClassName="selected" onClick={randomPhoto}>Home</NavLink>
          <NavLink to='/About' className="navBtn hovershdw" activeClassName="selected" onClick={randomPhoto}>About</NavLink>
          <NavLink to='/Portfolio' className="navBtn hovershdw" activeClassName="selected" onClick={randomPhoto}>Portfolio</NavLink>
        </div>
      </div>
    </header>
  )

}

export default Header;
