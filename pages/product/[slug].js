import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import hoddies from '../../public/hoddie.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Slug = ({ addToCart }) => {
  const router = useRouter()
  const { slug } = router.query
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  const checkServiceability = async () => {
    let pins = await fetch(`http://localhost:3000/api/pincode`)
    let pinJson = await pins.json()
    if (pinJson.includes(parseInt(pin))) {
      toast.success('Yay! This pincode is serviceable.', { position: "bottom-left", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
      setService(true)
      setService(true)
    }
    else {
      toast.error('Sorry, We do not deliver to this pincode yet.', { position: "bottom-left", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
      setService(true)
      setService(false)
    }
    // console.log(service)
  }

  const onChangePin = (e) => {
    setPin(e.target.value)
  }
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="block"
              src={hoddies}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODESWAGS
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Wear the code (XL/Blue)
              </h1>
            
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
                cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
                tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
                shorts keytar banjo tattooed umami cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
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
                  ₹499.00
                </span>
                <button className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy Now
                </button>
                <button onClick={() => { addToCart(slug, 1, 499, 'Wear the code(XL/Red)', 'XL', 'Red') }} className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
              <div className="flex space-x-2 mt-6 justify-center md:justify-start">
                <input onChange={onChangePin} className='border-2 px-2 border-gray-400 rounded' type="text" placeholder='Enter your pincode' />
                <button onClick={checkServiceability} className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Check
                  <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
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

export default Slug
