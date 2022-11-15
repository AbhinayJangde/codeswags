import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
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

      <nav className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10'>
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
        <div className="cart flex space-x-5 items-center absolute top-4 right-4 md:top-2 md:right-5">
          {/* <AiOutlineSearch className='text-xl md:text-3xl cursor-pointer text-blue-900' /> */}
          <Link href={'/login'}>
          <FaUserCircle className='opencart text-xl md:text-3xl cursor-pointer text-blue-900' />
          </Link>
          <AiOutlineShoppingCart onClick={toggleCart} className='opencart text-xl md:text-3xl cursor-pointer text-blue-900' />
        </div>
        <div ref={ref} className={`w-96 h-[100vh] sideCart absolute z-10 top-0 right-0 ${Object.keys(cart).length !== 0 ? `translate-x-0`: `translate-x-full`}  transform transition-transform  bg-blue-100 px-5 py-4`}>
          <div className='flex justify-between'>
            <h2 className='text-xl text-center font-bold'>Shopping Cart</h2>
            <AiOutlineCloseCircle onClick={toggleCart} className='text-xl md:text-3xl cursor-pointer text-blue-900' />
          </div>
          <ol className='list-decimal font-semibold'>
            {Object.keys(cart).length == 0 &&
              <div className='my-4  text-center'>Your cart is empty.</div>
            }
            {Object.keys(cart).map((k) => {
              return (<li key={k}>
                <div className="item flex my-5">
                  <div className='w-2/3 font-semibold'>{cart[k].name}</div>
                  <div className='w-1/3 flex items-center justify-center font-semibold text-xl '><AiOutlineMinusCircle onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='cursor-pointer' /> <span className="mx-2">{cart[k].qty}</span> 
                  <AiOutlinePlusCircle onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}  className='cursor-pointer' /></div>
                </div>
              </li>
              )
            })}

          </ol>

          <div className='font-bold my-2'>Subtotal : ₹ {subTotal}</div>
          <div className="flex justify-start" >
            <Link href={'/checkout'}><button className="flex mx-3 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md">
              <BsFillBagCheckFill className='my-1 mx-2' />Checkout
            </button></Link>
            <button onClick={clearCart} className="flex mx-3  text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md">
              Clear Cart
            </button>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
