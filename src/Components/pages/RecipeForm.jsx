import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../Features/recipe/recipeSlice';
import { useNavigate } from 'react-router-dom';

const RecipeForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState({
        title: "",
        ingredients: "",
        instructions: "",
        category: "Veg",
        diet: "Vegetarian",
        cuisine: "",
        difficulty: "Easy",
        prepTime: 0,
        cookTime: 0,
        totalTime: 0,
        servings: 1,
        dateAdded: new Date().toISOString().split('T')[0],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addRecipe(recipe));
        alert("Recipe added!");
        navigate('/');
    };

    return (
        <Container className='p-4'>
            <Row>
                <Col md={8} className="mx-auto">
                    <Card className='p-4'>
                        <h2 className='text-center mb-4'>Add Recipe</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type='text'
                                    value={recipe.title}
                                    onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Ingredients</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={3}
                                    value={recipe.ingredients}
                                    onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Instructions</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={3}
                                    value={recipe.instructions}
                                    onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    value={recipe.category}
                                    onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
                                >
                                    <option>Veg</option>
                                    <option>Non-Veg</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Cuisine</Form.Label>
                                <Form.Control
                                    type='text'
                                    value={recipe.cuisine}
                                    onChange={(e) => setRecipe({ ...recipe, cuisine: e.target.value })}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Difficulty</Form.Label>
                                <Form.Select
                                    value={recipe.difficulty}
                                    onChange={(e) => setRecipe({ ...recipe, difficulty: e.target.value })}
                                >
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Prep Time (minutes)</Form.Label>
                                <Form.Control
                                    type='number'
                                    value={recipe.prepTime}
                                    onChange={(e) => setRecipe({ ...recipe, prepTime: parseInt(e.target.value) })}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Cook Time (minutes)</Form.Label>
                                <Form.Control
                                    type='number'
                                    value={recipe.cookTime}
                                    onChange={(e) => setRecipe({ ...recipe, cookTime: parseInt(e.target.value) })}
                                    required
                                />
                            </Form.Group>
                            <Button type='submit' variant='primary' className="w-100">
                                Add Recipe
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default RecipeForm;