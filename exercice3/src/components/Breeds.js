import React from 'react';

function Breeds(props) {
  const {breed} = props

  return (
    <tr className="cat-breed">
        <td>{breed.breed}</td>
        <td>{breed.country}</td>
        <td>{breed.origin}</td>
        <td>{breed.coat}</td>
        <td>{breed.pattern}</td>
    </tr>
  );
}

export default Breeds;