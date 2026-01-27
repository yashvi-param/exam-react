import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button, Table, Modal, Form } from 'react-bootstrap';
import { deleterecipe, updaterecipe } from "../../Features/recipe/recipeSlice";

const RecipeDetails = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipe.recipes);
    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState(null);



    const handleEdit = (recipe) => {
        setEditData({ ...recipe });
        setShowModal(true);
    };

    
    const handleUpdate = () => {
        dispatch(updaterecipe(editData));
        setShowModal(false);
        alert("Recipe updated!");
    };

    
    const handleDelete = (id) => {
        if (window.confirm("Delete this recipe?")) {
            dispatch(deleterecipe(id));
            alert("Recipe deleted!");
        }
    };

    return (
        <Container className='p-4'>
            <Row>
                <Col>
                    <Card className='p-4'>
                        <h2 className='text-center mb-4'>Recipe List</h2>

                        {recipes.length === 0 ? (
                            <p className='text-center text-muted'>No recipes added yet</p>
                        ) : (
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                          <th>id</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recipes.map((recipe, index) => (
                                        <tr key={recipe.id}>

                                            <td>{recipe.name}</td>
                                            <td>{recipe.price}</td>
                                            <td>
                                                <Button
                                                    variant='warning'
                                                    size='sm'
                                                    className="me-2"
                                                    onClick={() => handleEdit(student)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant='danger'
                                                    size='sm'
                                                    onClick={() => handleDelete(student.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
                    </Card>
                </Col>
            </Row>

          
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {editData && (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editData.name}
                                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={editData.email}
                                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Course</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editData.course}
                                    onChange={(e) => setEditData({ ...editData, course: e.target.value })}
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default RecipeDetails;