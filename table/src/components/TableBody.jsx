import React, { useState } from 'react'
import DeleteData from './DeleteData/DeleteData'
const TableBody = ({ data }) => {
    const [show, setShow] = useState("none")
    const [num, setNum] = useState(null)

    const deletepopup = (idx) => {
        setNum(idx);
        setShow("block")
    }

    console.log(data)
    return (

        <tbody>
            {
                data.map((list, idx) => {
                    return (
                        <tr className='table-row-description' key={idx}>
                            <td className='table-description'>{list.id}</td>
                            <td className='table-description'>{list.name}</td>
                            <td className='table-description'>{list.username}</td>
                            <td className='table-description'>{list.address.zipcode}</td>
                            <td className='table-description'>{list.phone}</td>
                            <td className='table-description'>{list.website}</td>
                            <td className='table-description'>{list.company.name} {list.company.catchPhrase}{list.company.bs}</td>
                            <td className='table-action'>
                                <img src="./images/edit.svg" alt="edit" />
                                <div onClick={()=>deletepopup(idx)}>
                                    <img src="./images/trash.svg" alt="trash" />
                                </div>
                            </td>
                        </tr>
                    )

                })
            }
                            <div className='flex'>
                                <DeleteData num={num} show={show} setShow={setShow}/>
                            </div>
        </tbody>

    )
}

export default TableBody;