import React from 'react'
import mongoose from 'mongoose'
import Link from 'next/link'
import Image from 'next/image'
import Product from '../models/Product.js'

const tshirts = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap items-center justify-center -m-4">
          {products.map((item) => {
           
            return <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
              <Link passHref={true} key={item._id} href={`/product/${item.slug}`} className="block relative  rounded overflow-hidden">
                <img alt="ecommerce" className="h-[36vh] block " src={item.img} />
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">₹ {item.price}</p>
                  <p className="mt-1">{item.size}</p>
                </div>
              </Link>

            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.DB_URI)
  }
  let products = await Product.find({ category: 'T-SHIRTS' })
  
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }
  }
}

export default tshirts
