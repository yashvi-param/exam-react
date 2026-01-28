import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { fetchRecipes } from '../../Features/recipe/recipeSlice';
import { useNavigate } from 'react-router-dom';

const RecipeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipes, loading, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (loading) {
    return (
      <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '60vh' }}>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className='py-4'>
      <h1 className='mb-4'>Recipes</h1>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Row>
        {recipes.length === 0 ? (
          <Col>
            <p className='text-center text-muted'>No recipes available</p>
          </Col>
        ) : (
          recipes.map((recipe) => (
            <Col md={4} key={recipe.id} className='mb-4'>
              <Card className='h-100'>
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>
                    <strong>Cuisine:</strong> {recipe.cuisine}<br />
                    <strong>Category:</strong> {recipe.category}<br />
                    <strong>Difficulty:</strong> {recipe.difficulty}<br />
                    <strong>Prep Time:</strong> {recipe.prepTime} min<br />
                    <strong>Cook Time:</strong> {recipe.cookTime} min
                  </Card.Text>
                  <Button 
                    variant='primary' 
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default RecipeList;