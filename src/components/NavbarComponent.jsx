import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'


const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">StriviBook</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <NavDropdown title="Browse" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Browse</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent