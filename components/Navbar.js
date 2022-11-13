import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
const Navbar = () => {

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
   

  }

const ref = useRef()
return (
  <>

    <nav className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md'>
      <div className="logo mx-5 cursor-pointer">
        <Link href={'/'}><Image src="/logo.png" width={180} height={20} alt="" /></Link>
      </div>
      <div className="nav flex">
        <ul className='flex space-x-3 font-medium md:text-md'>
          <Link href='/tshirts'><li>Tshirts</li></Link>
          <Link href='/hoodies'><li>Hoodies</li></Link>
          <Link href='/stickers'><li>Stickers</li></Link>
          <Link href='/mugs'><li>Mugs</li></Link>
          <Link href='/mousepads'><li>Mousepads</li></Link>
          <Link href='/caps'><li>Caps</li></Link>
        </ul>
      </div>
      <div className="cart flex space-x-5 items-center absolute right-5">
        {/* <AiOutlineSearch className='text-xl md:text-3xl cursor-pointer text-blue-900' /> */}
        <AiOutlineShoppingCart onClick={toggleCart} className='opencart text-xl md:text-3xl cursor-pointer text-blue-900' />
      

      </div>
      <div ref={ref} className="w-96 h-full sideCart absolute z-10 top-0 right-0 translate-x-full transform transition-transform  bg-blue-100 px-5 py-4">
      <div className='flex justify-between'>
      <h2 className='text-xl text-center font-bold'>Shopping Cart</h2>
        <AiOutlineCloseCircle ref={ref} onClick={toggleCart} className='text-xl md:text-3xl cursor-pointer text-blue-900' />
      </div>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - wear the code</div>
              <div className='w-1/3 flex items-center justify-center font-semibold text-xl '><AiOutlinePlusCircle className='cursor-pointer' /> <span className="mx-2">1</span> <AiOutlineMinusCircle className='cursor-pointer' /></div>
            </div>
          </li>

        </ol>
        <ol className='list-decimal font-semibold'>
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirt - wear the code</div>
              <div className='w-1/3 flex items-center justify-center font-semibold text-xl '><AiOutlinePlusCircle className='cursor-pointer' /> <span className="mx-2">1</span> <AiOutlineMinusCircle className='cursor-pointer' /></div>
            </div>
          </li>

        </ol>
      <div className="flex justify-start">
      <button className="flex mx-3 mt-5 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md">
          <BsFillBagCheckFill className='my-1 mx-2' />Checkout
        </button>
        <button className="flex mx-3 mt-5 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md">
          Clear Cart
        </button>
      </div>

      </div>
    </nav>
  </>
)
}

export default Navbar
