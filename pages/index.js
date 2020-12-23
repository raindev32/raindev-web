import React from 'react'
import Head from 'next/head'
import Layout from '../src/components/Layout'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

export default function Home () {
  return (
    <div>
      <Layout title="RAIN.DEV | Your partner IT solutions for your bussines">
        <Container>
          <Row className="home-intro">
            <Col md={7}>
              <h1 className="intro-title">
                Rain Developer Website.
            </h1>
              <p>Hi, welcome to our website, glad to help your problem using technologies.</p>
              <Button>
                Get in Touch
            </Button>
            </Col>
            <Col md={5}>
              <Image src="./assets/programming.png" className="intro-image" />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}