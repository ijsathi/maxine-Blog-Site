import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ExtraPart.css';
import img from '../../images/contact.png'
const ExtraPart = () => {
    return (
        <div className='pt-5 mt-5'>
            <Container>
                <Row>
                    <Col className="pt-5" xs={6}>
                        <div className="extra-text">
                            <h1 className='fw-bold'>Join our newsletter 🎉</h1>
                            <p style={{ color: "#848b96" }}>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
                            <p className='pb-2'>
                                <span className='e-t'>01</span>
                                <span style={{ color: "#384252" }} className='fw-bold ms-2'>Get more discount</span>
                            </p>
                            <p>
                                <span className='e-t2'>02</span>
                                <span style={{ color: "#384252" }} className='fw-bold ms-2'>Get premium magazines</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="extra-img w-100">
                            <img className="h-100 w-100" src={img} alt="" />
                            {/* <img className="h-100 w-100" src="https://chisnghiax.com/ncmaz/assets/SVG-subcribe2.2e868cd7.png" alt="" /> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExtraPart;