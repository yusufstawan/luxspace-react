import React from 'react'

import Header from 'assets/parts/Header'
import Breadcrumb from 'assets/components/Breadcrumb'

import ShoppingCart from 'assets/parts/Cart/ShoppingCart'
import ShippingDetails from 'assets/parts/Cart/ShippingDetails'

import Sitemap from 'assets/parts/HomePage/Sitemap'
import Footer from 'assets/parts/Footer'
import Documents from 'assets/parts/Document'

export default function Cart() {
    return (
        <Documents>
            <Header theme="black" />

            <Breadcrumb
                list={[
                    { url: "/", name: "Home" },
                    { url: "/cart", name: "Shopping Cart" },
                ]}
            />

            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShippingDetails />
                    </div>
                </div>
            </section>
            <Sitemap />
            <Footer />
        </Documents>
    )
}
