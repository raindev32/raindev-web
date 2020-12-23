import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Link from 'next/link'

export default function NavBar () {
    const menu = [
        { title: "Home", href: '/' },
        { title: "Services", href: '/services' },
        { title: "Portofolio", href: '/portofolios' },
        { title: "Contact", href: '/contact' },
        { title: "Register", href: '/register' },
        { title: "Login", href: '/login' }
    ]

    return (
        <Navbar bg="white" variant="dark" className="navbar">
            <Container>
                <h3 className="brand-text">{`{ RAIN.DEV }`}</h3>
                <div inline>
                    <Nav className="mr-auto">
                        {
                            menu.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    <Nav className="text-black pl-5 cursor-pointer">{item.title}</Nav>
                                </Link>
                            ))
                        }
                    </Nav>
                </div>
            </Container>
        </Navbar>
    )
}