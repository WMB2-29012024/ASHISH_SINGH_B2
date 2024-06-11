import React from 'react'
import './DeleteData.css'
import { useContext } from 'react'
import { propContext } from '../../App'

const DeleteData = ({ num,show,setShow }) => {

  const { data,setData } = useContext(propContext);

  const onClose = () => {
    setShow("none");
  }
  const onDelete = (num) => {
    const updatedData = data.filter((sm, index) => index !== num);
    setData(updatedData);
    setShow("none");
  }
  return (

    <div className="modal" style={{ display: show }}>

      <div className="icon">
        <img src="./images/dlt.svg" alt="Delete Icon" />
        <button className="close-btn" onClick={onClose}>╳</button>
        <img src="./images/close.svg" alt=" close icon" />
      </div>
      <h2>Delete User?</h2>
      <p>Are you sure you want to delete this user? This action cannot be undone.</p>
      <div className="buttons">
        <button className="delete-btn" onClick={()=>onDelete(num)}>Delete</button>
        <button className="cancel-btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteData
