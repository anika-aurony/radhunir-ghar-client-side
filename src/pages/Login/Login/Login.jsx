import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';




const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState('')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result =>{
            const logUser = result.user;
            console.log(logUser);
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error.message)
        })

    }

           
    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(result =>{
            const logUser = result.user;
            console.log(logUser);
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }


    return (
        <Container className='w-25 mx-auto my-5'>
            <h3 className='text-center py-3'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="success" type="submit" className=''>
                    Login
                </Button>
                <br />
                <Form.Text className="text-success">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <br/>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

            </Form>
            <hr />
           <div className='d-flex '>
           <Button variant="success" type="submit" className='me-1' onClick={handleGoogleSignIn}>
                Sign In with Google
            </Button>
           
            <Button variant="success" type="submit" className='' onClick={handleGithubSignIn}>
                Sign In with Github
            </Button>
           </div>


        </Container>
    );
};

export default Login;