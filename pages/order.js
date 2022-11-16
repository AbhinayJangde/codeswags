import React from 'react'
import Image from 'next/image'
const order = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-10 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <Image
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
        src="https://m.media-amazon.com/images/I/71BirWti0xL._UX569_.jpg"
      />
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          CODESWAGS
        </h2>
        <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-2">
          Order Id : #198730729
        </h1>
        <p className="leading-relaxed my-2">
          Your order has been successfully placed.
        </p>
        <div class="flex mb-4">
          <a class="flex-grow text-center text-indigo-500  py-2 text-lg px-1">Item Description</a>
          <a class="flex-grow text-center  py-2 text-lg px-1">Quantity</a>
          <a class="flex-grow text-center py-2 text-lg px-1">Item Total</a>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Wear the code (XL/Black)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">₹499.00</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Wear the code (XL/Blue)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">₹499.00</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500">Wear the code (XL/Red)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">₹499.00</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">
          Subtotal : ₹1497.00
          </span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Track Order
          </button>
          
        </div>
      </div>
      
    </div>
  </div>
</section>

  )
}

export default order
