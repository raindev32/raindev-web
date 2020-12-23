import Layout from '../src/components/Layout'
import { Row, Col, Image } from 'react-bootstrap'

export default function Services () {
  const OurServices = [
    {
      title: 'React',
      desc: '  Some quick example text to build on the card title and make up the bulk of the card content.',
      image: 'assets/img-services/react.png'
    },
    {
      title: 'React Native',
      desc: '  Some quick example text to build on the card title and make up the bulk of the card content.',
      image: 'assets/img-services/react-native.png'
    },
    {
      title: 'Node JS + Express JS',
      desc: '  Some quick example text to build on the card title and make up the bulk of the card content.',
      image: 'assets/img-services/nodejs-express.png'
    }
  ]

  return (
    <Layout title="Service Page">
      <div className="services-page">
        <Col xs={1} md={12}>
          <h2 className="services-title">Services</h2>
          <p>We provide services using several technologies as below</p>
        </Col>
        <Row xs={1} md={12}>
          <Col md={6}>
            <Image src="./assets/our-services.png" className="services-image" />
          </Col>

          <Col xs={1} md={6}>
            <ul>
              <li>
                <h2>Website Software</h2>
              </li>
              <ul>
                <li>- React JS ( Next JS )</li>
                <li>- Bootstrap UI</li>
                <li>- Tailwind CSS</li>
              </ul>

              <br />
              <li>
                <h2>Mobile Application</h2>
              </li>
              <ul>
                <li>- React Native ( Android/IOS )</li>
                <li>- Nativebase UI</li>
                <li>- Android Studio Enginee</li>
                <li>- XCode Enginee</li>
              </ul>
            </ul>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}