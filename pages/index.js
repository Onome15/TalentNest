import Navoffcanvas from '../Components/Navoffcanvas'
import Head from 'next/head'
import { Row, Col, Container, Button, Offcanvas, } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import { Body } from '../Components/Body';
import Link from "next/link"

export default function Home() {

  return (
    <>
      <Head>
        <title>
          Joe | Homepage
        </title>
      </Head>
      <div>
        <div className={styles.waitlist}>
          <Container>
            <Row className={styles.bb}>
              <Col xs={12} md={6}>
                <h4> Register To Join The Waitlist</h4>
              </Col>
              <Col xs={12} md={6}>
                <h4> 00 : 00 : 00 : 00    <Button><Link href='/Form'><a style={{textDecoration: 'none', color:'white'}}> Join Waitlist</a></Link></Button> </h4>

              </Col>
            </Row>
          </Container>
        </div>
        <Navoffcanvas/>
        <Body/>
      </div>
    </>
  )
}
