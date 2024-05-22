import React from 'react'
import ShowEntries from '../showEntries/ShowEntries'
import SearchBox from '../searchBox/SearchBox'
import './Header.css'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div className='header'>
     <div className="left-aside">
     <ShowEntries/>
     <SearchBox/>
     </div>
     <Button/>


    </div>
  )
}

export default Header