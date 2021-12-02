import React from 'react'

export default function ShippingDetails() {
    return (
        <div class="w-full md:px-4 md:w-4/12" id="shipping-detail">
            <div class="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
                <form action="success.html">
                    <div class="flex flex-start mb-6">
                        <h3 class="text-2xl">Shipping Details</h3>
                    </div>

                    <div class="flex flex-col mb-4">
                        <label for="complete-name" class="text-sm mb-2"
                        >Complete Name</label
                        >
                        <input
                            data-input
                            type="text"
                            id="complete-name"
                            class="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                            placeholder="Input your name"
                        />
                    </div>

                    <div class="flex flex-col mb-4">
                        <label for="email" class="text-sm mb-2">Email Address</label>
                        <input
                            data-input
                            type="email"
                            id="email"
                            class="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                            placeholder="Input your email address"
                        />
                    </div>

                    <div class="flex flex-col mb-4">
                        <label for="address" class="text-sm mb-2">Address</label>
                        <input
                            data-input
                            type="text"
                            id="address"
                            class="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                            placeholder="Input your address"
                        />
                    </div>

                    <div class="flex flex-col mb-4">
                        <label for="phone-number" class="text-sm mb-2"
                        >Phone Number</label
                        >
                        <input
                            data-input
                            type="tel"
                            id="phone-number"
                            class="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                            placeholder="Input your phone number"
                        />
                    </div>

                    <div class="flex flex-col mb-4">
                        <label for="complete-name" class="text-sm mb-2"
                        >Choose Courier</label
                        >
                        <div class="flex -mx-2 flex-wrap">
                            <div class="px-2 w-6/12 h-24 mb-4">
                                <button
                                    type="button"
                                    data-value="fedex"
                                    data-name="courier"
                                    class="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                                >
                                    <img
                                        src="./images/content/logo-fedex.svg"
                                        alt="Logo Fedex"
                                        class="object-contain max-h-full"
                                    />
                                </button>
                            </div>
                            <div class="px-2 w-6/12 h-24 mb-4">
                                <button
                                    type="button"
                                    data-value="dhl"
                                    data-name="courier"
                                    class="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                                >
                                    <img
                                        src="./images/content/logo-dhl.svg"
                                        alt="Logo dhl"
                                        class="object-contain max-h-full"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col mb-4">
                        <label for="complete-name" class="text-sm mb-2"
                        >Choose Payment</label
                        >
                        <div class="flex -mx-2 flex-wrap">
                            <div class="px-2 w-6/12 h-24 mb-4">
                                <button
                                    type="button"
                                    data-value="midtrans"
                                    data-name="payment"
                                    class="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                                >
                                    <img
                                        src="./images/content/logo-midtrans.png"
                                        alt="Logo midtrans"
                                        class="object-contain max-h-full"
                                    />
                                </button>
                            </div>
                            <div class="px-2 w-6/12 h-24 mb-4">
                                <button
                                    type="button"
                                    data-value="mastercard"
                                    data-name="payment"
                                    class="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                                >
                                    <img
                                        src="./images/content/logo-mastercard.svg"
                                        alt="Logo mastercard"
                                    />
                                </button>
                            </div>
                            <div class="px-2 w-6/12 h-24 mb-4">
                                <button
                                    type="button"
                                    data-value="bitcoin"
                                    data-name="payment"
                                    class="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                                >
                                    <img
                                        src="./images/content/logo-bitcoin.svg"
                                        alt="Logo bitcoin"
                                        class="object-contain max-h-full"
                                    />
                                </button>
                            </div>
                            <div class="px-2 w-6/12 h-24 mb-4">
                                <button
                                    type="button"
                                    data-value="american-express"
                                    data-name="payment"
                                    class="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                                >
                                    <img
                                        src="./images/content/logo-american-express.svg"
                                        alt="Logo american-logo-american-express"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button
                            type="submit"
                            disabled
                            class="bg-pink-400 text-black hover:bg-black hover:text-pink-400 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-6"
                        >
                            Checkout Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
