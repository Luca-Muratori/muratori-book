import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import books from '../data/book.json'

class LatestComponent extends Component {
    state = { selectedBook: null }

    render() {
        return (
            <Container fluid>
                <Row className='d-flex '>
                    {
                        books.map((book) => (
                            <Col xs={12} lg={4} className=' my-3 d-flex border'>
                                <img className='w-25 mx-3 ' key={book.asin} src={book.img} />
                                <div>
                                    <p className='font-weight-bold'>{book.title}</p>
                                    <p>{book.price}</p>
                                </div>

                            </Col>
                        ))
                    }

                </Row>
            </Container>
        )
    }
}

export default LatestComponent