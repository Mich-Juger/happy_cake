import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    return (
        <div className='formularioConsulta'>
            <Form >
            <h2> Cuéntanos, en qué te podemos ayudar? 🤓 </h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Correo: </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="textarea"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="danger" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    );
}

export default BasicExample;