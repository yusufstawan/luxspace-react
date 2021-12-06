import React from 'react'

import Header from 'assets/parts/Header'
import PageErrorMessage from 'assets/parts/HomePage/PageErrorMessage'

import Sitemap from 'assets/parts/HomePage/Sitemap'
import Footer from 'assets/parts/Footer'
import Documents from 'assets/parts/Document'

export default function NotFound() {
    return (
        <Documents>
            <Header theme="black" />
            <PageErrorMessage />
            <Sitemap />
            <Footer />
        </Documents>
    )
}
