import React from 'react'

const TableHead = () => {
    const tablehead = ["userid", "Name", "UserName","Zipcode","phone","website","company","action"]
  return (
   
        <thead>
            <tr>
              { tablehead.map((item,id)=>{
                return (
                   <th>{item}</th>
                )
              })}
            </tr>
        </thead>
      
    
  )
}

export default TableHead;
