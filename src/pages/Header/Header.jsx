import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <Navbar bg="success" variant="dark" >
                <Container>
                    <Navbar.Brand href="#home" className='pe-5'>Radhunir Ghar</Navbar.Brand>
                    <Nav className=" flex-grow-1 ps-5 text-center">
                        <Link className='text-decoration-none text-white pe-5' to='/'>Home</Link>
                        <Link className='text-decoration-none text-white' to='/'>Blog</Link>

                    </Nav>
                    <Nav className='me-auto'>
                        <Link to='/login'><Button variant="light"><FaSignInAlt /> Login</Button></Link>


                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;