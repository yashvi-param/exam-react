import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../Features/receipe/recipeSlice';

const RecipeForm = () => {
    const dispatch = useDispatch();

    const [recipe, setRecipe] = useState({
        name: "",
        id: "",
        email: "",
        course: "",
    });

   

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addRecipe(recipe));

        setRecipe({ name: "", id: "", email: "", course: "" });
        alert("Recipe added!");
    };

    return (
        <Container className='p-4'>
            <Row>
                <Col md={8} className="mx-auto">
                    <Card className='p-4'>
                        <h2 className='text-center mb-4'>Add recipe</h2>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    value={recipe.name}
                                    onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
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