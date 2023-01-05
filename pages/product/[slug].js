import React, { useState } from 'react'
import { useRouter } from 'next/router'
import mongoose from 'mongoose'
import Image from 'next/image'
import Product from '../../models/Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = ({ buyNow, addToCart, product, variants }) => {
  const router = useRouter()
  const { slug } = router.query
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  const checkServiceability = async () => {
    let pins = await fetch(`http://localhost:3000/api/pincode`)
    let pinJson = await pins.json()
    if (pinJson.includes(parseInt(pin))) {
      toast.success('Yay! This pincode is serviceable.', {position: "bottom-left",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light", });
      setService(true)
    }
    else {
      setService(false)
      toast.error('Sorry,Your pincode is not serviceable.', {position: "bottom-left",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light", });

    }
  }
  const onChangePin = (e) => {
    setPin(e.target.value)
  }
  const [color, setColor] = useState(product.color)
  const [size, setSize] = useState(product.size)

  const refreshVariants = (newsize, newcolor) => {
    console.log('v is ', variants, newsize, newcolor)
    let url = `http://localhost:3000/product/${variants[newcolor][newsize]['slug']}`
    window.location = url

  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"
        />
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image width={"300"} height={"600"} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded" src={product.img} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWAGS</h2>
              <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-1">{product.title} ({product.size}/{(product.color)[0].toUpperCase() + (product.color).substring(1)})</h1>
              <p className="leading-relaxed">
                {product.desc}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(variants).includes('white') && Object.keys(variants['white']).includes(size) && <button onClick={() => { refreshVariants(size, 'white') }} className={`border-2 rounded-full w-6 h-6 focus:outline-none ${color === 'white' ? 'border-black' : 'border-gray-300'}`} />}
                  {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(size) && <button onClick={() => { refreshVariants(size, 'red') }} className={`border-2 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none ${color === 'red' ? 'border-black' : 'border-gray-300'}`} />}
                  {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(size) && <button onClick={() => { refreshVariants(size, 'blue') }} className={`border-2 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${color === 'blue' ? 'border-black' : 'border-gray-300'}`} />}
                  {Object.keys(variants).includes('black') && Object.keys(variants['black']).includes(size) && <button onClick={() => { refreshVariants(size, 'black') }} className={`border-2 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${color === 'black' ? 'border-black' : 'border-gray-300'}`} />}
                  {Object.keys(variants).includes('brown') && Object.keys(variants['brown']).includes(size) && <button onClick={() => { refreshVariants(size, 'brown') }} className={`border-2 ml-1 bg-red-900 rounded-full w-6 h-6 focus:outline-none ${color === 'brown' ? 'border-black' : 'border-gray-300'}`} />}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select value={size} onChange={(e) => { refreshVariants(e.target.value, color) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {Object.keys(variants[color]).includes('S') && <option value={'S'}>S</option>}
                      {Object.keys(variants[color]).includes('M') && <option value={'M'}>S</option>}
                      {Object.keys(variants[color]).includes('L') && <option value={'L'}>S</option>}
                      {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>S</option>}
                      {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>S</option>}
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-start space-x-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{product.price}.00
                </span>
                <button onClick={() => { buyNow(slug, 1, product.price, product.title, size, color) }} className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy Now
                </button>
                <button onClick={() => { addToCart(slug, 1, product.price, product.title, size, color) }} className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Cart
                </button>
             
              </div>
              <div className="flex space-x-2 mt-6 justify-center md:justify-start">
                <input onChange={onChangePin} className='border-2 px-2 border-gray-400 rounded' type="text" placeholder='Enter your pincode' />
                <button onClick={checkServiceability} className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Check
                </button>
              </div>
              {!service && service != null && <div className=" text-red-600 mt-2">
                Sorry, We do not deliver to this pincode yet.
              </div>}

              {service && service != null && <div className=" text-green-600 mt-2">
                Yay! This pincode is serviceable.
              </div>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.DB_URI)
  }
  let product = await Product.findOne({ slug: context.query.slug })
  let variants = await Product.find({ title: product.title, category: product.category })
  let colorSizeSlug = {}
  for (let item of variants) { // {red: {xl:{slug: 'wear-the-code--xl'}}}
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
    else {
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }

  }

  return {
    props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }
  }
}
export default Slug
