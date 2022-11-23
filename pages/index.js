import Head from 'next/head'
import Link from 'next/link'
import { BiRupee } from 'react-icons/bi'
import { MdLocalShipping } from 'react-icons/md'
import { FaTshirt } from 'react-icons/fa'
const Home = () => {
  return (
    <>
      <Head>
        <title>Codeswags | -  Wear the code</title>
        <meta name="description" content="CodeClothes.com - Wear the code" />
        <Link rel="shortcut icon" href="./public/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-2xl md:text-4xl font-medium title-font mb-2 text-gray-900">
              WEAR THE CODE WITH <span className='text-blue-800'>CODESWAGS</span>
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Wear whatever you want? What do you want? You want code? so why not wear the code!
            </p>
          </div>
          <div className="flex flex-col md:flex-row -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg flex flex-col items-center justify-center">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-400 text-indigo-900 mb-4">
                  <FaTshirt className='text-2xl' />
                </div>
                <h2 className="text-lg text-gray-900  font-medium title-font mb-2">
                  Premium Tshirts
                </h2>
                <p className="leading-relaxed text-base">
                  Our T-Shirts are 100% made of cotton.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg flex flex-col items-center justify-center">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-400 text-indigo-900 mb-4">
                  <MdLocalShipping className='text-2xl' />
                </div>

                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Free Shipping
                </h2>
                <p className="leading-relaxed text-base">
                  We ship all over India for FREE.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg flex flex-col items-center justify-center">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-400 text-indigo-900 mb-4">
                  <BiRupee className='text-2xl' />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Exciting Offers
                </h2>
                <p className="leading-relaxed text-base">
                  We provide amazing offers & discounts on our products.
                </p>
              </div>
            </div>



          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Shop Now
          </button>
        </div>
      </section>

    </>

  )
}

export default Home