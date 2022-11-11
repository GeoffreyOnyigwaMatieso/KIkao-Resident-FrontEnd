import React from 'react'

/*
passing down a prop called item as an argument 

*/

function  Character({item}){

    const {land,location,size,} = item

  return (
    <tr>
      <td>{land}</td>
      <td>{location}</td>
      <td>{size}</td>
    </tr>
  )
}
export default Character
