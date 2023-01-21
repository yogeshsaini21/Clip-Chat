import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col xs="12" className="text-center">
            Copyright © 2023 My Website
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
