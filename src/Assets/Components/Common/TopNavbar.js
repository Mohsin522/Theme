import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Logo from '../../images/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const TopNavbar = () => {
  return (
    <Navbar  expand="lg" className='navbar'>
      <Container>
        <Link to='' className='logo_desktop'><img src={Logo}></img></Link>
        <Navbar.Toggle className='navbar_toggler'>
          <div className='hamburger' aria-controls="basic-navbar-nav" >
          <span></span>
          <span></span>
          <span></span>
        </div>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav" className='navbar_collapse_container'>
          
          <Nav className="nav_links">
            <Link to="">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>            
          </Nav>
          <div className='navbar_right'>
            <div className='navbar_Search_input'>
              <input type='text' placeholder='Search here'></input>
              <SearchIcon />
            </div>
            <div className='user_icon'>
               <PersonIcon />
            </div>
            <div className='heart_icon'>
              <FavoriteBorderIcon />
            </div>
            <div className='navbar_Cart_button'>
               <AddShoppingCartIcon />
               My Cart (0)
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavbar