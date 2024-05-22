import React from 'react'
import "./showEntries.css";

const ShowEntries = () => {
  return (
    <div className="show-entry">
    <p>Show</p>
    <select name="" id="select">
      <option value="10" selected>
        10
      </option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
    </select>
    <p>entries</p>
  </div>
  )
}

export default ShowEntries
