import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import books from '../data/book.json'

class LatestComponent extends Component {
    render() {
        return (
            <Container fluid>
                <Row className='d-flex '>
                    {
                        books.map((book) => (

                            <Col xs={12} lg={4} key={book.asin} className='my-2 d-flex border '>
                                <img key={book.asin} className='w-50' src={book.img} />
                                <div className='ml-3'>
                                    <div className=''>
                                        <p className='font-weight-bolder'>
                                            {book.title}
                                        </p>
                                        <p>
                                            {book.price}$
                                        </p>
                                        <p>category : {book.category}</p>
                                    </div>
                                    <div className='mt-5'><button className='btn btn-success'>Buy</button></div>
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