import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import styles from './Body.module.css'
import { GiCheckMark } from 'react-icons/gi';
import { BsPersonPlus } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import { AiOutlineFile } from 'react-icons/ai';
import Link from "next/link"
// import image1 from './image1.jpg'

export const Body = () => {
    return (
        <div>

            <Container>

                <h1 className={styles.bodyHeader}>
                    The simplest way to find your next hires with NO commision fee required.
                </h1>
                <Row>
                    <Col xs={12} md={4} className={styles.rowCol} >
                        <Card style={{ textAlign: 'center' }} className={styles.column} >
                            {/* <Card.Img variant="top" src={onome} width={200} className={styles.proImg} /> */}
                            <Card.Img variant="top" id='img' src={'/image5.jpg'} className={styles.cardImage} alt='My photo' />
                            <Card.Body>
                                <Card.Title> Full-Time</Card.Title>
                                <Card.Text>
                                    Hire top tech talents from our elite community in a couple of hours
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4} className={styles.rowCol}>
                        <Card style={{ textAlign: 'center' }} className={styles.column}>
                        <Card.Img variant="top" id='img' src={'/image6.jpg'} className={styles.cardImage} alt='My photo' />
                            <Card.Body>
                                <Card.Title> Dedicated Team</Card.Title>
                                <Card.Text>
                                    You want to turn your idea into a working product? Build a dedicated team from a pool of elite talents across Africa.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={4} className={styles.rowCol}>
                        <Card style={{ textAlign: 'center' }} className={styles.column}>
                        <Card.Img variant="top" id='img' src={'/image7.jpg'} className={styles.cardImage} alt='My photo' />
                            <Card.Body>
                                <Card.Title> Freelance</Card.Title>
                                <Card.Text>
                                    Is there a project you are compassionate about and you need someone for a couple of weeks? We have experienced talents looking to jump on interesting projects like yours!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h2 className={styles.header2}>Join Now</h2>
            </Container>
            <div className={styles.background}>
                <Container>
                    <h1 className={styles.bodyHeader2}>
                        TalentNest is the simplest way to find your next tech role
                    </h1>
                    <Row style={{ position: 'relative' }}>
                        <Col xs={12} md={7} className={styles.horizontalCentering}>
                            <Row>
                                <Col xs={2} lg={1} >
                                    <div className={styles.checkIcon2} style={{ backgroundColor: 'white' }}> <BsPersonPlus size={20} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <p>Create your profile and let companies send you interview request.</p> <br />
                                    </span>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2} lg={1}>
                                    <div className={styles.checkIcon2} style={{ backgroundColor: 'white' }}> <AiOutlineFile size={20} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <p>Get Interview offer from top local, and foreign tech companies and decide who you want to meet.</p> <br />
                                    </span>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2} lg={1}>
                                    <div className={styles.checkIcon2} style={{ backgroundColor: 'white' }}> <FcSearch size={20} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <p>Find your next job in 20 days on average.</p>
                                    </span>
                                </Col>
                            </Row>

                        </Col>
                        <Col xs={12} md={5}>
                            <div className={styles.translate1}>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ marginTop: '25px', marginBottom: '30px' }}>
                <Container>
                    <h1 className={styles.bodyHeader2}>
                        How it works for talent
                    </h1>
                    <Row className='flex-row-reverse flex-md-col'>
                        <Col xs={12} md={7} >
                            <Row>
                                <Col xs={2} lg={1} className={styles.horizontalCentering}>
                                    <div className={styles.checkIcon}> <GiCheckMark size={30} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <h5 style={{ fontWeight: 'bolder' }}>Create a profile</h5>
                                        <p>In less than 5 mins, you will be able to set up your profile and portfolio.</p>
                                    </span>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2} lg={1} className={styles.horizontalCentering}>
                                    <div className={styles.checkIcon}> <GiCheckMark size={30} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <h5 style={{ fontWeight: 'bolder' }}>Set your standards</h5>
                                        <p>Define your next ideal position by setting your desired role, tech stack, salary and industry.</p>
                                    </span>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2} lg={1} className={styles.horizontalCentering}>
                                    <div className={styles.checkIcon}> <GiCheckMark size={30} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <h5 style={{ fontWeight: 'bolder' }}>Initial interviews</h5>
                                        <p>Our interview process is rigorous. Top 3% talents makes it to our pool. in order to meet our requirements,
                                            you will be required to undergo different stages of interview.
                                        </p>
                                    </span>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2} lg={1} className={styles.horizontalCentering}>
                                    <div className={styles.checkIcon}> <GiCheckMark size={30} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <h5 style={{ fontWeight: 'bolder' }}>Have Companies request for you</h5>
                                        <p>Hiring managers check your overall performance in your initial alongside your profile.
                                            They send you an interview request if you are a good fit.
                                        </p>
                                    </span>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2} lg={1} className={styles.horizontalCentering}>
                                    <div className={styles.checkIcon}> <GiCheckMark size={30} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <h5 style={{ fontWeight: 'bolder' }}>Receive and offer</h5>
                                        <p>If you impress the hiring company, an offer will be sent to you. You can always choose to accept the offer or reject it.
                                        </p>
                                    </span>
                                </Col>
                            </Row>

                            <p>You want to join the pool?</p>

                            <Button><Link href='/Form'><a style={{ textDecoration: 'none', color: 'white' }}> Request early access</a></Link></Button>

                        </Col>
                        <Col xs={12} md={5} style={{ position: 'relative' }}>
                            <div className={styles.ImageCentering}>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.background}>
                <Container>
                    <h1 className={styles.bodyHeader2}>
                        How it works for employers
                    </h1>
                    <Row >
                        <Col xs={12} md={7}>
                            <Row>
                                <Col xs={2} lg={1} className={styles.horizontalCentering}>
                                    <div className={styles.checkIcon1}> <GiCheckMark size={30} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <h5 style={{ fontWeight: 'bolder' }}>Find top vetted candidates</h5>
                                        <p>
                                            Each week we add new candidates actively looking for a new job. Our search makes it easy to narrow the list
                                            based on their desired role, experience, and skills, We also sort them by their overall interview performance.
                                        </p>
                                    </span>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2} lg={1} className={styles.horizontalCentering}>
                                    <div className={styles.checkIcon1}> <GiCheckMark size={30} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <h5 style={{ fontWeight: 'bolder' }}>Send an interview request</h5>
                                        <p>
                                            Found a talent you like? send them a request! Unlike other platforms, beacause
                                            everyone on Talentnest is currently seeking a job, request have a 97% response rate.
                                        </p>
                                    </span>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={2} lg={1} className={styles.horizontalCentering}>
                                    <div className={styles.checkIcon1}> <GiCheckMark size={30} color='darkBlue' /> </div>
                                </Col>
                                <Col>
                                    <span>
                                        <h5 style={{ fontWeight: 'bolder' }}>5 requests = 1 hire</h5>
                                        <p>
                                            it takes 5 request on average to hire a suitable candidate on talentnest.
                                        </p>
                                    </span>
                                </Col>
                            </Row>

                            <Button styles={{marginBottom:'30px'}}><Link href='/Form'><a style={{ textDecoration: 'none', color: 'white' }}> Request early access</a></Link></Button>
<br/> <br/>
                        </Col>
                        <Col xs={12} md={5} style={{ position: 'relative' }}>
                            <div className={styles.translateD}>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={styles.background2}>
                <Container>

                    <Row >
                        <Col xs={6} md={4}>
                            <ul>
                                <h5>Address</h5>
                                <li>Lagos, Nigeria</li>
                                <li>+2349069512879(9am-5pm GMT, Monday - Friday)</li>
                                <li>hello@codenest.ng</li>
                            </ul>
                        </Col> <br />
                        <Col xs={6} md={4}>
                            <ul>
                                <h5>Explore</h5>
                                <li>Blog</li>
                                <li>About Us</li>
                                <li>Courses</li>
                                <li>Contact us</li>
                            </ul>
                        </Col><br /><br />
                        <Col xs={6} md={4}>
                            <ul>
                                <h5>Informations</h5>
                                <li>Corporate Program</li>
                                <li>TalentHunt</li>
                                <li>Privacy</li>
                                <li>Terms of service</li>
                            </ul>
                        </Col><br />

                    </Row>
                </Container>
                <span style={{ textAlign: 'center', paddingBottom: '10px' }}>
                    <p> @ 2021 CodeNest Africa. All Rights Reserved <br /> Designed By <Link href='https://orherojoe.netlify.app/'><a target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> Onome</a></Link> </p>

                </span>
            </div>
        </div>
    )
}
