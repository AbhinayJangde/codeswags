import React, { useEffect } from 'react'
import mongoose from 'mongoose'
import Link from 'next/link'
import Image from 'next/image'
import Product from '../models/Product.js'
const Mugs = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap items-center justify-center -m-4">
          {Object.keys(products).length === 0 && <p className='text-2xl my-36 py-56'>Sorry all the mugs are corrently out of stock. New stock comming soon. Stay Tuned.</p>}
          {Object.keys(products).map((item) => {
            return <div key={products[item]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
              <Link passHref={true} href={`/product/${products[item].slug}`} className="block relative  rounded overflow-hidden">
                <img alt="ecommerce" className="block"  src={products[item].img} />
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {products[item].category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {products[item].title}
                  </h2>
                  <p className="mt-1">₹ {products[item].price}</p>

                  <div className="mt-1">
                    {products[item].size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                    {products[item].size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                    {products[item].size.includes('L') && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                    {products[item].size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                    {products[item].size.includes('XXL') && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                  </div>
                  <div className="flex mt-1 ">
                    {products[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none" />}
                    {products[item].color.includes('white') && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none" />}
                    {products[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none" />}
                    {products[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none" />}
                    {products[item].color.includes('brown') && <button className="border-2 border-gray-300 ml-1 bg-red-900 rounded-full w-6 h-6 focus:outline-none" />}
                  </div>

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
    mongoose.connect(process.env.DB_URI)
  }
  let products = await Product.find({ category: 'mugs' })
  let mug = {}
  for (let item of products) {
    if (item.title in mug) {
      if (!mug[item.title].color.includes(item.color) && item.availableQty > 0) {
        mug[item.title].color.push(item.color)
      }
      if (!mug[item.title].size.includes(item.size) && item.availableQty > 0) {
        mug[item.title].size.push(item.size)
      }
    }
    else {
      mug[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        mug[item.title].color = [item.color]
        mug[item.title].size = [item.size]

      }
    }
  }
  console.log(mug)

  return {
    props: { products: JSON.parse(JSON.stringify(mug)) }
  }
}

export default Mugs
