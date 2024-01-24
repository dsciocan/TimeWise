import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <a href="#!" className="btn btn-outline-light btn-floating m-1"><FaFacebookF /></a>
            <a href="#!" className="btn btn-outline-light btn-floating m-1"><FaTwitter /></a>
            <a href="#!" className="btn btn-outline-light btn-floating m-1"><FaGoogle /></a>
            <a href="#!" className="btn btn-outline-light btn-floating m-1"><FaInstagram /></a>
            <a href="#!" className="btn btn-outline-light btn-floating m-1"><FaLinkedinIn /></a>
            <a href="#!" className="btn btn-outline-light btn-floating m-1"><FaGithub /></a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 Datum</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
