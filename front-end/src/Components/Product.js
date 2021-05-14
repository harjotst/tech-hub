import React from "react";
import Rating from "./Rating";
import { Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Product({ product }) {
  const linkStyle = { cursor: "pointer" };

  return (
    <Col>
      <Card className="my-3 p-3">
        <LinkContainer to={`/product/${product._id}`} style={linkStyle}>
          <Card.Img variant="top" src={product.image} />
        </LinkContainer>
        <Card.Body>
          <LinkContainer to={`/product/${product._id}`} style={linkStyle}>
            <Card.Text>{product.name}</Card.Text>
          </LinkContainer>
          <Card.Text as="div">
            <div className="my-3">
              <Rating stars={product.rating} reviews={product.numReviews} />
            </div>
          </Card.Text>
          <Card.Text as="h3">
            <strong>${product.price}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
