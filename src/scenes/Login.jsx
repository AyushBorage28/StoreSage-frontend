import React from 'react';
import styles from '../styles';

const Login = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center font-poppins justify-center">
      <section className="bg-black-gradient md:w-[60%] lg:w-[40%] xl:w-[30%] rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-xl font-bold leading-tight tracking-tight mb-4 md:text-2xl">
          Sign in to your account
        </h1>
        <form className="space-y-4" action="#">
          <div>
            <label className="block mb-2 text-sm font-medium">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-[#dc4a32] focus:border-[#dc4a32] block w-full p-2.5"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-[#dc4a32] focus:border-[#dc4a32] block w-full p-2.5"
              required=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-[#dc4a32] focus:border-[#dc4a32]"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="text-gray-500">Remember me</label>
              </div>
            </div>
            <a href="#" className="text-sm font-medium text-[#dc4a32] hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#dc4a32] hover:bg-[#c73727] focus:ring-4 focus:outline-none focus:ring-[#dc4a32] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign in
          </button>
          <p className="text-sm font-light text-gray-500">
            Don’t have an account yet? <a href="/signup" className="font-medium text-[#dc4a32] hover:underline">Sign up</a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
