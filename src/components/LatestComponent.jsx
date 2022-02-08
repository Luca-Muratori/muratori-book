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

                            <Col xs={12} lg={4} key={book.asin} className=' my-3 d-flex border '>
                                <img key={book.asin} className='w-50 mx-3 ' src={book.img} />
                                <div>
                                    <p className='font-weight-bolder'>
                                        {book.title}
                                    </p>
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