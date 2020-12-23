import { Row, Col } from 'react-bootstrap'
import Layout from '../src/components/Layout'

export default function Portfolio () {
  const Product = [
    { title: "MyBox App", category: "Mobile Dev", image: "assets/portofolios/5.jpeg" },
    { title: "Event App", category: "Mobile Dev", image: "assets/portofolios/1.jpeg" },
    { title: "Clothing Print App", category: "Mobile Dev", image: "assets/portofolios/3.jpeg" },
    { title: "Lelang App", category: "Mobile Dev", image: "assets/portofolios/2.jpeg" },
    { title: "Depot App", category: "Mobile Dev", image: "assets/portofolios/4.jpeg" }
  ]

  return (
    <Layout title="Portofolio Page">
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">
              Here are some of the products that have been made our teams.
			      </p>

            <Row md="auto">
              {
                Product.map((item, index) => (
                  <Col key={index} md={4}>
                    <div className="portfolio-wrapper">
                      <div className="portfolio-item">
                        <img src={item.image} className="portfolio-image" />

                        <h4 className="portfolio-name">{item.title}</h4>
                        <div className="portfolio-category">{item.category}</div>
                      </div>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </div>
        </div>
      </section>
    </Layout>
  )
}