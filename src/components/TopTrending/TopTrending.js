import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './TopTrending.css';

const TopTrending = () => {
    const [top, setTop] = useState([]);

    useEffect(() => {
        fetch("topTrending.json")
            .then(result => result.json())
            .then(data => setTop(data));

    }, []);
    return (
        <div>
            <div className="top mt-5">
                <div className="t-text text-center pt-5 pb-4 mb-3">
                    <h2 className='fw-bold'>Top trending topics</h2>
                    <h5 style={{ color: "#666" }}>Discover over 100 topics</h5>
                </div>
                <Row xs={2} md={5} className="g-4 w-100 ps-4 pb-5">
                    {
                        top.map(t =>
                            <Col>
                                <Card className='t-card'>
                                    <div className="t-t pt-3">
                                        <p>{t.id}</p>
                                    </div>
                                    <div className="text-center">
                                        <Card.Img variant="top" style={{ width: "110px", height: "110px", borderRadius: "50%" }} className='' src={t.img} />
                                    </div>
                                    <Card.Body className='text-center'>
                                        <Card.Title className='fw-bold'>{t.name}</Card.Title>
                                        <Card.Text style={{ color: "#666" }}>
                                            {t.article} Article
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
                <div className="text-center pb-5 t-more">
                    <Link to="/">
                        <button className=''>Show me more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopTrending;