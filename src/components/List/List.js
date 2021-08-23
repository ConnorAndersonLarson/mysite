import './List.css';
import React from 'react';

const List = ( { info } ) => {

  const listInfo = info.map((info, i) => {
    return <React.Fragment key={i.toString()}><li>{info}<br /></li></React.Fragment>
  })

  return(
    <ul className="info-list">{listInfo}</ul>
  )
}

export default List;
