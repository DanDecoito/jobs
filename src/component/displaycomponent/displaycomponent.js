import {Container, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function DisplayComponent (props){
    return(
    <>
        <Container>
            <Row className='displayBorder'>
                <Col className='leftDisplayBox'>
                    <div><p className='infoText'>Company Name</p></div>
                    <div><p className='responseText'>{props.name}</p></div>
                    <div><p className='infoText'>Skills Needed</p></div>
                    <div><p className='responseText'>{props.skills}</p></div>
                    <div><p className='infoText'>Goals</p></div>
                    <div><p className='responseText'>{props.goals}</p></div>
                    <Button href={props.srcLink}>Link </Button>
                </Col>
                <Col className='rightDisplayBox'>
                    <img className='displayImage' src={props.jobImg} />
                    <div><p className='infoText'>Why I want to work Here</p></div>
                    <div><p className='responseText'>{props.why}</p></div>

                </Col>
            </Row>
        </Container>
    </>
    )
}

export default DisplayComponent