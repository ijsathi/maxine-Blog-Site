import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(result => result.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='blog-all'>
            <Row xs={1} md={4} className="g-4 w-100 ps-4">
                {
                    blog.map(data =>
                        <Col>
                            <Card className="blog h-100">
                                <Card.Img variant="top" className="w-100 h-75 blog-img" src={data.blog_img} />
                                <Card.Body>
                                    <div className="own-part pt-2 pb-3">
                                        <div className="me-2 own-part-img">
                                            <img className='' src={data.your_img} alt="" />
                                        </div>
                                        <div className="me-2">
                                            <small style={{ color: "#414143" }} className='own-name'>{data.your_name}</small><span style={{ paddingLeft: "4px", fontSize: "13px" }}>*</span>
                                        </div>
                                        <div className="own-date me-4">
                                            <small style={{ color: "#7a7c81" }}>{data.date}</small>
                                        </div>
                                    </div>
                                    <Card.Title className="fw-bold title">{data.blog_title}...</Card.Title>
                                    <Card.Text className='blog-desc'>
                                        {data.description_1}<button className='more-btn'> more...</button>
                                    </Card.Text>
                                    <div className="own-part">
                                        <div style={{color:"#e11d48"}} className="react d-flex p-1">
                                            <span><i class="fas fa-heart"></i></span> <p style={{paddingLeft:"5px", fontSize:"14px"}}>{data.total_react}</p>
                                        </div>
                                        <div className="comment p-1 d-flex ms-4 text-center">
                                            <span><i class="far fa-comment-dots"></i></span> <p style={{paddingLeft:"5px", fontSize:"14px"}}>{data.total_comment}</p>
                                        </div>
                                        <div className="bookmark">
                                            <span className='b'><i class="fas fa-bookmark"></i></span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    );



};

export default Blog;