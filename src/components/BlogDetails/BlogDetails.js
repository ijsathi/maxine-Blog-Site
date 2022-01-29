import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './BlogDetails.css';

const BlogDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(details => setDetails(details))
    }, [])
    console.log(details);
    return (
        <>
            <div className='details-banner'>
                <div className="editor">
                    <h2 className='fw-bold'>Editor's pick</h2>
                    <h5>.Discover the most outstanding articles in all topics of life</h5>
                </div>
                <Container>
                    <Row className='all-details'>
                        <Col sm={8}>
                            <div className="detail-img">
                                <img className='w-100 h-25' src={details.blog_img} alt="" />
                            </div>
                        </Col>
                        <Col className='' sm={4}>
                            <div className="details-part-1 position-relative">
                                <div className="details-part-2">
                                    <div className="badge">
                                        <p className='badge-p'>{details.badge}</p>
                                    </div>
                                    <h4 className='d-title'>{details.blog_title_2}</h4>
                                    <div className="d-part-1">
                                        <div className="d-my">
                                            <div className="d-name">
                                                <small className=''>{details.your_name}</small>
                                            </div>
                                            <div>
                                                <small style={{ fontSize: "12px" }}>{details.date}</small>
                                            </div>
                                        </div>
                                        <div>
                                            <img className='d-img' src={details.your_img} alt="" />
                                        </div>
                                    </div>
                                    <div className="d-reaction">
                                        <div className="d-bookmark">
                                            <p><span className='d-bmk-icon'><i class="far fa-bookmark"></i></span><span style={{ fontSize: "12px" }}>{details.bookmarks}</span></p>
                                        </div>
                                        <div className="d-comment">
                                            <p>{details.total_comment}<span className='d-cmnt-icon'><i class="far fa-comment-dots"></i></span></p>
                                        </div>
                                        <div className="d-react">
                                            <p>{details.total_react} <span className='d-rct-icon'><i class="fas fa-heart"></i></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="d-desc pt-5">
                            <p>{details.description}</p>
                            <p>{details.description_a}</p>
                            <p>{details.description_b}</p>
                            <p>{details.description_c}</p>
                            <p>{details.description_c}</p>
                            <p style={{ fontSize: "25px", color: "#18181b" }} className='fw-bold'>{details.description_d}</p>
                            <p>{details.description_e}</p>
                            <img className='w-100 h-25' src={details.description_img} alt="" />
                            <p><i>{details.description_f}</i></p>
                            <p><small><i>{details.description_g}</i></small></p>
                            <p><small><i>{details.description_h}</i></small></p>
                            <p><small><i>{details.description_i}</i></small></p>
                            <p style={{ fontSize: "25px", color: "#18181b" }} className='fw-bold'>{details.description_j}</p>
                            <p style={{ fontSize: "18px", color: "#18181b" }} className='fw-bold'>{details.description_k}</p>
                            <p>{details.description_l}</p>
                            <p>{details.description_m}</p>
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="d-tag">
                            <Container>
                                <Row className="d-upper pt-4">
                                    <Col xs={12} md={8}>
                                        <h5 className='d-discover fw-bold'> <span style={{ color: "gray" }}><i class="fas fa-tags"></i></span> Discover more tags</h5>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <h6 className='d-view fw-bold'>View all</h6>
                                    </Col>
                                </Row><hr />
                            </Container>
                            <Container>
                                <Row>
                                    <Col>
                                        <ul>
                                            <li>Outdoors (14)</li>
                                            <li>Health (4)</li>
                                            <li>Electronics (7)</li>
                                            <li>Toys (22)</li>
                                            <li>Sports (15)</li>
                                            <li>Graphic's (25)</li>
                                            <li>Life Style (18)</li>
                                            <li>Travel (28)</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li>Industrial (26)</li>
                                            <li>Automotive (9)</li>
                                            <li>Computer (26)</li>
                                            <li>Design (15)</li>
                                            <li>Beauty (27)</li>
                                            <li>Books (25)</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );

};

export default BlogDetails;