import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from '../../Config/Config';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../Features/recipe/recipeSlice';

const LoginModal = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleGoogleLogin = async () => {
        dispatch(loginStart());
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const userData = {
                uid: result.user.uid,
                email: result.user.email,
                displayName: result.user.displayName,
                photoURL: result.user.photoURL
            };
            dispatch(loginSuccess(userData));
            handleClose();
            setError('');
        } catch (error) {
            dispatch(loginFailure(error.message));
            setError(error.message);
        }
    };

    const handleEmailAuth = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        setError('');

        try {
            let result;
            if (isSignUp) {
                result = await createUserWithEmailAndPassword(auth, email, password);
            } else {
                result = await signInWithEmailAndPassword(auth, email, password);
            }

            const userData = {
                uid: result.user.uid,
                email: result.user.email,
                displayName: result.user.displayName || email.split('@')[0]
            };

            dispatch(loginSuccess(userData));
            handleClose();
            setEmail('');
            setPassword('');
        } catch (error) {
            dispatch(loginFailure(error.message));
            setError(error.message);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{isSignUp ? 'Sign Up' : 'Login'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleEmailAuth}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 mb-3">
                        {isSignUp ? 'Sign Up' : 'Login'}
                    </Button>
                </Form>

                <div className="text-center mb-3">
                    <span>or</span>
                </div>

                <Button
                    variant="outline-danger"
                    className="w-100 mb-3"
                    onClick={handleGoogleLogin}
                >
                    <i className="bi bi-google me-2"></i>
                    Continue with Google
                </Button>

                <div className="text-center">
                    <Button
                        variant="link"
                        onClick={() => {
                            setIsSignUp(!isSignUp);
                            setError('');
                        }}
                    >
                        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;