// import Link from "next/link"
import { Container, Offcanvas, Navbar, Nav, NavDropdown, Button, Row, Col} from 'react-bootstrap';
import styles from './Navoffcanvas.module.css'
import Link from "next/link"

const Navoffcanvas = () => {
  return (
  <div>
    <div className={styles.gradient}> 
    <Container>
    {[false].map((expand) => (
     
      <Navbar key={expand} expand='md' sticky='top' className={styles.color}>
        <Container fluid>
          <Navbar.Brand href="#"><h2>Talentnest</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <h4>Talentnest</h4>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" id='nav'>
                <NavDropdown
                  title="How it Works"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Talent</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Employer
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">Academey</Nav.Link>
                <Nav.Link href="#action1">TalentNest Salary Guide</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </Container>
        <div className={styles.introDiv}>
  
          <Container>
            <Row >
              <Col xs={12} md={7}>
              <h1>Hire top vetted tech talents in 48 hours.</h1> <br/>

<p>Get Matched with our top 3% talents from Africa and hire without any hassle</p> <br/>

<button className={styles.whitButton}><Link href='/Form'><a style={{textDecoration: 'none'}}> Request early access</a></Link></button>
              </Col>
              <Col xs={12} md={5}>
              <div className={styles.translate}>
             
              </div>  
              </Col>
            </Row>
          </Container>
     
   
   </div>
  
  </div>
  <div className={styles.body}>
  
  </div>
  </div>
  )
}

export default Navoffcanvas