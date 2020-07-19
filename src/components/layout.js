import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './layout.css'

const layout = ({children}) => {
    return (
        <React.Fragment>
            <NavBar />
                {children}
            <Footer />
        </React.Fragment>
    )
}

export default layout
