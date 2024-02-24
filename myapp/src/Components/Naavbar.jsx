import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormExample() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <div>
          <Navbar.Brand href="#home">
            <img
              src="https://th.bing.com/th?id=OIP.JCGGgssMIuUrZFU3I6jv0AHaHC&w=256&h=243&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              width="50"
              height="50"
              className="d-inline-block align-top" style={{ marginLeft: '0.5rem' }}
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </div>
      <Form inline className="w-100">
        <Row className="w-100 justify-content-center">
          <Col md="8">
            <InputGroup className="w-100">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2 w-100"
              />
            </InputGroup>
          </Col>
          <Col md="2" className="custom-button-group">
            <Button type="submit" className="rounded custom-button">Log In</Button>
            <Button type="submit" className="rounded custom-button">Sign Up</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default FormExample;
