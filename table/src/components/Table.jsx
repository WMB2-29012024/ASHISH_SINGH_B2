import React from 'react'
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({data}) => {
  return (
    
      <table>
       <TableHead />
        <TableBody 
        data={data} />
      </table>
    
  )
}

export default Table;
