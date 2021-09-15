import './navbar.css'
import logo from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbarLogo">
                <img src={logo} className='navLogo' alt="" />
            </div>
            <div className="navbarMenu">
                <div className="navbarMenuItem">
                    <Link to='/home'>HOME</Link>
                </div>
                <div className="navbarMenuItem">
                    <Link to='/projects'>PROJECTS</Link>
                </div>
                <div className="navbarMenuItem">
                    <Link to='/forsale' >FOR SALE</Link>
                </div>
                <div className="navbarMenuItem">
                    <Link to='/about' >ABOUT US</Link>
                </div>
                <div className="navbarMenuItem">
                    <Link to='/blog' >BLOG</Link>
                </div>
                <div className="navbarMenuItem">
                    <Link to='/contact' >CONTACT</Link>
                </div>
            </div>
        </div>
    )
}
