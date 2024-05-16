import React from 'react'
import { useLocation} from 'react-router-dom'

const Contact = () => {
    const location = useLocation();

  return (
    <div>
      Contact us page {location.state}
    </div>
  )
}

export default Contact;
