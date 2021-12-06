import React from 'react'

import Header from 'assets/parts/Header'
import Hero from 'assets/parts/HomePage/Hero'
import BrowseRoom from 'assets/parts/HomePage/BrowseRoom'
import JustArrived from 'assets/parts/HomePage/JustArrived'
import Clients from 'assets/parts/HomePage/Clients'
import Sitemap from 'assets/parts/HomePage/Sitemap'
import Footer from 'assets/parts/Footer'

import Documents from 'assets/parts/Document'

export default function HomePages() {
    return (
        <Documents>
            <Header theme="white" position="absolute" />
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <Sitemap />
            <Footer />
        </Documents>
    )
}
