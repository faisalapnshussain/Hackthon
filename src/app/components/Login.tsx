import React from 'react'

const Login = () => {
  return (
    <div className='w-[100%] h-[600px] flex items-center justify-center gap-4'>
        
            
        <div className="lg:w-2/6 md:w-1/2 gap-6 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 h-[600px]">
  <h2 className="text-gray-900 text-[36px] font-medium title-font mb-5">Sign Up</h2>
  <div className="relative mb-4 ">
    <label htmlFor="full-name" className="leading-7 text-sm  text-gray-600">
    Username or email address
    </label>
    <input
      type="text"
      id="full-name"
      name="full-name"
      className="w-full bg-white rounded-lg h-[60px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
      Password
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full bg-white rounded-lg h-[60px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <div className='flex items-center gap-4'><input
      type="checkbox"
      id="forgot"
      name="forgot"
      className="w-4 bg-white rounded-lg h-[60px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    /> <div>Remember me</div>
    </div>
    <div className='flex gap-3'>
  <button className="text-black border-2 rounded-2xl py-2 w-[200px] px-8 focus:outline-none hover:bg-indigo-600 text-lg">
    Login in
  </button> <p className="text-xs text-gray-500 mt-3">
    Lost your Password?
  </p>
  </div>
  
  
</div>











        

<div className="lg:w-2/6 md:w-1/2 gap-6 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 h-[600px]">
  <h2 className="text-gray-900 text-[36px] font-medium title-font mb-5">Register</h2>
  <div className="relative mb-4 ">
    <label htmlFor="full-name" className="leading-7 text-sm  text-gray-600">
    Email Address
    </label>
    <input
      type="text"
      id="full-name"
      name="full-name"
      className="w-full bg-white rounded-lg h-[60px] border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
  <div className="relative mb-4">
    <p className='text-justify text-[16px]'>A link to set a new password will be sent to your email address.</p>
    <p className='text-justify text-[16px]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
  </div>
  
    <div className='flex gap-3'>
  <button className="text-black border-2 rounded-2xl py-2 w-[200px] px-8 focus:outline-none hover:bg-indigo-600 text-lg">
    Login in
  </button> 
  </div>
</div>

        </div>
        
    
  )
}

export default Login