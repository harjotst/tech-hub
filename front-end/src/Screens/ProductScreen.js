import React, { useState, useEffect } from "react";
import Rating from "../Components/Rating";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup, Button, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

import axios from "axios";

function ProductScreen() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async function () {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        return new Error("Fetch Product Unsuccessful");
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      <LinkContainer to="/">
        <Button className="btn btn-light">Go Back</Button>
      </LinkContainer>
      <Row className="my-3">
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
            <ListGroup.Item>Price:&nbsp;${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Rating:
              <Rating stars={product.rating} reviews={product.numReviews} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price: </Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status: </Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item as="div">
              <Button
                className="btn-block"
                disabled={product.countInStock === 0}
              >
                Buy
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
