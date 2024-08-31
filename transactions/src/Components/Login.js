import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      {/* {auth.isAuthenticated() && <Navigate to="/transactions" replace={true} />} */}
      <div className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center pt-40">
          <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold ">Login to your account</div>
              <p className="h-4 text-red-500">value</p>
            </div>
            <form
              className="flex flex-col items-center justify-center gap-4"
            >
              <input
                type="text"
                placeholder="Username"
                className="px-4 py-2 border rounded-md w-44 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <input
                type="password"
                placeholder="password"
                className="px-4 py-2 border rounded-md w-44 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <Link to={"/transactions"}>
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-900"
                >
                  Log In
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login