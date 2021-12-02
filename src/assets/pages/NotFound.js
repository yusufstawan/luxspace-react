import React from 'react'

import Header from 'assets/parts/Header'
import PageErrorMessage from 'assets/parts/HomePage/PageErrorMessage'

import Sitemap from 'assets/parts/HomePage/Sitemap'
import Footer from 'assets/parts/Footer'

export default function NotFound() {
    return (
        <>
            <Header theme="black" />
            <PageErrorMessage />
            <Sitemap />
            <Footer />
        </>
    )
}
