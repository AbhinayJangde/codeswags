import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/main.css'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({value: null})
  const [key, setkey] = useState()

  useEffect(()=>{
    try {
      if(localStorage.getItem('cart')){
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }    
    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
    let token = localStorage.getItem('token')
    if(token){
      setUser({value: token})
      setkey(Math.random())
    }
  }, [router.query])
  const saveCart = (myCart)=>{
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length; i++){
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }
  const addToCart  =  (itemCode, qty, price, name, size, variant)=>{
    let newCart = cart
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode] = {qty: 1, price, name, size ,variant}
    }

    setCart(newCart)
    saveCart(newCart)
  }
  const removeFromCart  =  (itemCode, qty, price, name, size, variant)=>{
    let newCart = JSON.parse(JSON.stringify(cart))
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"] <= 0){
      delete newCart[itemCode]
    }
   
    setCart(newCart)
    saveCart(newCart)
  }

  const buyNow = (itemCode, qty, price, name, size, variant)=>{
    saveCart({})
    let newCart = {itemCode: {qty: 1, price,name, size ,variant}}
 
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }
  const clearCart = ()=>{
    setCart({})
    saveCart({})
  }
  const logout = ()=>{
    setUser({value:null})
    localStorage.removeItem('token')
    setkey(Math.random())
    router.push('http://localhost:3000/login')
  }
  return (
  <>
      <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Component cart={cart} addToCart={addToCart} buyNow={buyNow} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}  {...pageProps} />
      <Footer/>
    </>
)}

export default MyApp
