import React from 'react'

import Header from 'assets/parts/Header'
import Breadcrumb from 'assets/components/Breadcrumb'

import ProductDetails from 'assets/parts/Details/ProductDetails'
import Suggestion from 'assets/parts/Details/Suggestion'
import Clients from 'assets/parts/HomePage/Clients'
import Sitemap from 'assets/parts/HomePage/Sitemap'
import Footer from 'assets/parts/Footer'

export default function HomePages() {
    return (
        <>
            <Header theme="black" />

            <Breadcrumb
                list={[
                    { url: "/", name: "Home" },
                    { url: "/categories/91231", name: "Office Room" },
                    { url: "/categories/91231/products/7888", name: "Details" },
                ]}
            />

            <ProductDetails />
            <Suggestion />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}
