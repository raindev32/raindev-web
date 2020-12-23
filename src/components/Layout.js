import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout (props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link ref="icon" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Flove2dev.com%2Fblog%2Fweb-performance-tip-make-sure-you-have-a-favicon%2F&psig=AOvVaw1DPjekPnKStpWzbi_LmjK2&ust=1608460860300000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCIquXt2e0CFQAAAAAdAAAAABAJ" />
            </Head>
            <NavBar />
            <div className="container">
                <div className="mt-8">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}