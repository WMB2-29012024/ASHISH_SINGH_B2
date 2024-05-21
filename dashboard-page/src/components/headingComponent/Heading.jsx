import React from 'react'
import './Heading.css'

const Heading = ({ text, size }) => {
    return (
        <div className='heading'>
            <p className={size}>{text}</p>
        </div>
    )
}

export default Heading;
