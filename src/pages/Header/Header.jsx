import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Navbar  variant="dark" style={{backgroundColor: 'mediumseagreen'}} >
                <Container>
                    <Navbar.Brand className='pe-5'>Radhunir Ghar</Navbar.Brand>
                    <Nav className=" flex-grow-1 ps-5 text-center">
                        <Link className='text-decoration-none text-white pe-5' to='/'>Home</Link>
                        <Link className='text-decoration-none text-white' to='/blog'>Blog</Link>

                    </Nav>
                    <Nav className='me-auto'>
                        
                        {user && <p className='text-white pt-2 me-3 ' data-toggle="tooltip" data-placement="right" title={user?.displayName}> <img src={user?.photoURL
                        } alt="" srcset="" style={{height: '40px', borderRadius: '50%', width: '40px'}}/> </p>}

                        {user ?
                            <Button onClick={handleLogOut} variant="success">Logout</Button> :
                            <Link to="/login">
                                <Button variant="success"><FaSignInAlt />  Login</Button>
                            </Link>
                        }


                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;