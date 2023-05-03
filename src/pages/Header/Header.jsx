import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserCircle  } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Navbar bg="success" variant="dark" >
                <Container>
                    <Navbar.Brand className='pe-5'>Radhunir Ghar</Navbar.Brand>
                    <Nav className=" flex-grow-1 ps-5 text-center">
                        <Link className='text-decoration-none text-white pe-5' to='/'>Home</Link>
                        <Link className='text-decoration-none text-white' to='/'>Blog</Link>

                    </Nav>
                    <Nav className='me-auto'>
                        {
                            user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                        }

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