import './Project.css'

function Project( {name, compTime, teamQuant, stack, abst, gal, highLow } ) {

  return(
    <section className='project'>
      <h2 className="proj-title">${name}</h2>
    </section>
  )
}

export default Project;
