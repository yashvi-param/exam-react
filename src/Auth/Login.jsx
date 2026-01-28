import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../Features/recipe/recipeSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Mock authentication - replace with your actual API call
      const response = await fetch('http://localhost:5173/users');
      const users = await response.json();
      
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        dispatch(loginSuccess({
          id: user.id,
          username: user.username,
          role: user.role,
        }));
        // Redirect to home
        window.location.href = '/';
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Login failed: ' + err.message);
    }
  };

  return (
    <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <Card style={{ width: '400px' }} className='p-4'>
        <h2 className='text-center mb-4'>Login</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group className='mb-3'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button type='submit' variant='primary' className='w-100'>
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
