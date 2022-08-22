import React, {Component} from "react";
import { Container, Col, Row, Button } from "react-bootstrap";


class App extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="row">
                    <Col xs={12}>
                        <h1>My First React App</h1>
                        <Button>Look, i am a button</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
