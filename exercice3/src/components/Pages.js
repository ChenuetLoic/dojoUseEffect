import React from 'react';

function Pages(props) {
  // console.log('props:', props);
  const {button, getBreeds, currentPage} = props
  

  // "url":"https:\/\/catfact.ninja\/breeds?page=2",
  // "label":"Next",
  // "active":false

  // const disabledButton = (button.active ? 'disabled' : '')

  return (
    <button className={(button.active ? 'active' : '')} onClick={() => getBreeds(button.url)}>{button.label}</button>
  );
}

export default Pages;
