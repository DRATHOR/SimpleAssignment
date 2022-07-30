import React from 'react';
import './Table.css'

const Table = () => {
  return (
    <div>
    <table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td><a href="#">Simple</a></td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>

  
 
</table>

 <div className='footer'>
    view more 
  </div>

    </div>
  )
}

export default Table