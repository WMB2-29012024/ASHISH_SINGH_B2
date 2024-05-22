import React from 'react'

const TableBody = ({ data }) => {
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
                                <img src="./images/trash.svg" alt="trash" />
                            </td>
                        </tr>
                    )



                })
            }
        </tbody>

    )
}

export default TableBody;
