import {Link, Route, Routes} from 'react-router-dom'
import {Button} from 'react-bootstrap';


function LandingPage(){
    return(
        <>
            <div>
                <p className='landingPageText'>Landing Page and obligatory use of routers</p>
                <Button as={Link} to='homePage' >Press to Enter</Button>
            </div>
            
        </>
    )
}

export default LandingPage