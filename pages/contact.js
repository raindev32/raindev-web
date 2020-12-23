import { Row, Col } from 'react-bootstrap'
import Layout from '../src/components/Layout'

export default function Contact () {
  return (
    <Layout title="Contact Page">
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">
              Feel free to contact us, what u needed for your bussines with our technologies solutions.
			      </p>

            <div>
              <ul>
                <li>
                  WA Bussiness/No Telepon: [<a href="" >+62 85156828919</a>]
                </li>
                <li>
                  Email: [<a href="">rain.developer32@gmail.com</a>]
                </li>
                <li>
                  Github: [<a href="">https://github.com/raindev32</a>]
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}