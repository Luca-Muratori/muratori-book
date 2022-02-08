import { Jumbotron, Container } from 'react-bootstrap'


const WelcomeComponent = (props) => {
    return (
        <Jumbotron >
            <Container>
                <h1 style={{ fontSize: props.fontSize, color: props.titleColor }}>{props.branding}</h1>
                <p style={{ fontSize: props.fontSizeSubtitle }}>
                    What do you want to read?
                </p>
            </Container>
        </Jumbotron >
    )
}

export default WelcomeComponent 