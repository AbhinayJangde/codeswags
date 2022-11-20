import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import login from '../public/login.jpg'
const Login = () => {
  return (
    <div class="mb-80">
      <div class="flex flex-col md:flex-row justify-center items-center ">
        <div className="img ">
            <Image src={login} width={500} alt="" />
        </div>
        <div className="p-32">
        <form className="mt-8 space-y-6" action="#" method="POST">
          <h2 className='text-center md:text-4xl'>Log in</h2>
          <input type="hidden" name="remember" value="true" />
          <div className="space-y-3 rounded-md shadow-sm">
            
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 md:text-md" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only ">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 md:text-md" placeholder="Password" />
            </div>
          
          </div> 
          <div>
              <Link href={'/forgot'} className='text-sm text-right'>Forget password</Link>
          </div>

          <div>
            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
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
