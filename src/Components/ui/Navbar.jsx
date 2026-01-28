import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../Features/recipe/recipeSlice";
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const user = useSelector((state) => state.recipe.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Navbar.Brand href='/'>Recipe App</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {user ? (
            <>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/add'>Add Recipe</Nav.Link>
              <span className='nav-text me-3'>Welcome, {user.username}</span>
              <Button variant='outline-light' size='sm' onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Nav.Link href='/login'>Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
