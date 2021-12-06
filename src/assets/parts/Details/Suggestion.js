import React from 'react'
import { Link } from 'react-router-dom'

export default function Suggestion({ data }) {
    return (
        <section class="bg-gray-100 px-4 py-16">
            <div class="container mx-auto">
                <div class="flex flex-start mb-4">
                    <h3 class="text-2xl capitalize font-semibold">
                        Complete your room <br class="" />with what we designed
                    </h3>
                </div>
                <div class="flex overflow-x-auto mb-4 -mx-3">
                    {data?.map(item => {
                        return <div class="px-3 flex-none" style={{ width: 320 }} key={item.id}>
                            <div class="rounded-xl p-4 pb-8 relative bg-white">
                                <div class="rounded-xl overflow-hidden card-shadow w-full h-36">
                                    <img
                                        src={item.imageUrl}
                                        alt=""
                                        class="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <h5 class="text-lg font-semibold mt-4">{item.title}</h5>
                                <span class="">IDR {item.price}</span>
                                <Link to={`/categories/${item.idc}/products/${item.id}`} class="stretched-link">
                                </Link>
                            </div>
                        </div>
                    })}
                </div >
            </div >
        </section >
    )
}
