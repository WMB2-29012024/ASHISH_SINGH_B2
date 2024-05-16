
import React, { useEffect } from "react"
import {  useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/contact")
        }, 3000)

    }, [])


    return (
        <div>
            <h3>Home</h3>
            <button onClick={() => navigate("/contact", {state:'ashish'})}>Go to contact page</button>
            <br />
            <br />
            <br />
            <br />
            {/* <nav className="nav-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/about">About</Link></li>

                
            </ul>
        </nav> */}
            <Link to="/contact">Go to contact page </Link>
            <br />
            <Link to="/about">Go to about page </Link>
            <br />
            <Link to="/project">Go to project page </Link>

        </div>
    )
}

export default Home
