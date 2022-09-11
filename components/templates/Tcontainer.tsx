import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
    fluid?: boolean,
}

const Tcontainer = ({fluid}: Props) => {
  return (
    <Container
        fluid={fluid}
    >

    </Container>
  )
}

export default Tcontainer