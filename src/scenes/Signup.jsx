
const Signup = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center font-poppins justify-center">
      <section className="bg-black-gradient md:w-[60%] lg:w-[40%] xl:w-[30%] rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-xl  font-bold leading-tight tracking-tight mb-4 md:text-2xl">
          Create an account
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
          <div>
            <label className="block mb-2 text-sm font-medium">Confirm password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-[#dc4a32] focus:border-[#dc4a32] block w-full p-2.5"
              required=""
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-700 focus:ring-3 focus:ring-[#dc4a32]"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="font-light text-gray-500">
                I accept the{" "}
                <a href="#" className="font-medium text-[#dc4a32] hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-[#dc4a32] hover:bg-[#c73727] focus:ring-4 focus:outline-none focus:ring-[#dc4a32] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Create an account
          </button>
          <p className="text-sm font-light text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-[#dc4a32] hover:underline">
              Login here
            </a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Signup;
