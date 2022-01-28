import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-area'>
            <Container>
                <Row className='pt-5'>
                    <Col xs={6}>
                        <div className="f-img">
                            <img src="http://www.dynamicpress.eu/envato/maxine/wp-content/uploads/2015/04/logo-footer.png" alt="" />
                        </div>
                        <div className="pt-3">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi repellat, veritatis iure dolorem, omnis reprehenderit natus rerum minus nam praesentium excepturi numquam veniam deserunt quaerat, possimus distinctio odit blanditiis ducimus.
                            </p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <h6 className='fw-bold'>CONTACT INFO</h6>
                        <p className='pt-4 pb-2'>
                            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit.</small>
                        </p>
                        <p className=''>
                            <span className='me-2'><i class="fas fa-map-marker-alt"></i></span>
                            324 Madison Street,39535 London, UK
                        </p>
                        <p>
                            <span className='me-2'><i class="fas fa-phone-alt"></i></span>
                            <span className="fw-bold">Phone:</span> +00 123 456 7890
                        </p>
                        <p>
                            <span className='me-2'><i class="far fa-envelope"></i></span>
                            <span className="fw-bold">Email:</span> contact@example.com
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="copyright text-center pt-5">
                <p><small>Copyright &copy; 2021 all rights reserved at maxine blogging site</small></p>
            </div>
        </footer>
    );
};

export default Footer;