import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState('')

    const handleRegister = event =>{
        setError('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            setError('Password should be minimum 6 characters')
        }
        console.log(name, photo, email, password);
        createUser(email, password, photo)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(result.user, name, photo);
            })
            .catch(error => {
                console.log(error);
                
            })
            form.reset();
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            console.log('user name updated')
        })
        .catch(()=>{
            setError(error.message)
        })
    }
    return (
        <Container className='w-25 mx-auto my-3 make-responsive'>
            <h3 className='text-center py-3'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                
                <Button variant="success"  type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-success">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Registration;