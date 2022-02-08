import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import books from '../data/book.json'

class LatestComponent extends Component {
    state = { selectedBook: null }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {
                            books.map((book) => (
                                <img key={book.asin} src={book.img} />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LatestComponent