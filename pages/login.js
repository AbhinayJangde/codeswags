import React, { useEffect, useState } from 'react'
import  { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import login from '../public/login.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password }

    let res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)

    setEmail('')
    setPassword('')
    if (response.success) {
      localStorage.setItem('token', response.token)
      toast.success('Your are successfully login.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push('http://localhost:3000')
      }, 700);
    }
    else {
      toast.error('Please enter valid credential.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }


  }
  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }


  }
  return (
    <div class="mb-10 md:mb-80">
      <div class="flex flex-col md:flex-row justify-center items-center ">
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

        <div className={`hidden md:block `}>
          <Image src={login} width={500} alt="" />
        </div>
        <div className="p-32">
          <form onSubmit={handleSubmit} className="mt-8 space-y-5" method="POST">
            <h2 className='text-center text-2xl md:text-4xl'>Log in</h2>
            <input type="hidden" name="remember" value="true" />
            <div className="space-y-3 rounded-md shadow-sm">

              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input value={email} onChange={handleChange} id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 md:text-md" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only ">Password</label>
                <input value={password} onChange={handleChange} id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 md:text-md" placeholder="Password" />
              </div>

            </div>
            <div>
              <Link href={'/forgot'} className='text-sm text-right text-blue-800'>Forget password ?</Link>
            </div>


            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" ariaHidden="true">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                </span>
                Log In
              </button>
            </div>
            <div className="text-grey-dark mt-6 text-center">
              I don't have an account?
              <Link href={'/signup'} className="no-underline border-b border-blue mx-1 text-indigo-500">
                Sign up
              </Link>.
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login
