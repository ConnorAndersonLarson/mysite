import './Switcher.css';
import { useState } from 'react';

const Switcher = ( { name, item, setItem, gallery } ) => {

  const changeProject = (e, n) => {
    e.preventDefault();
    if (item === gallery.length-1 && n === 2) {
      setItem(0)
    } else if (item === 0 && n === 0) {
      setItem(gallery.length-1)
    } else {
      setItem(item + n - 1)
    }
  }

  return(
    <section className="title-interface">
      <button className="port-btn" id="back" onClick={event => changeProject(event, 0)}>«</button>
      <h2 className="caption">{name}</h2>
      <button className="port-btn" id="forward" onClick={event => changeProject(event, 2)}>»</button>
    </section>
  )

}

export default Switcher;
