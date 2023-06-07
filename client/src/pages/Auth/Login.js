import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Layout >
            <>
                {/* component */}
                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container  max-w-md  mx-auto flex-1 flex flex-col items-center justify-center px-2 card">
                        <div className="bg-white h-auto px-6 py-8 rounded shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-black w-full ">
                            <h1 className="mb-8 text-3xl text-center font-mono mt-8">Login Page</h1>

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="username"
                                placeholder="UserName"
                            />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                            />

                            <button className="relative  w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                                <span className="relative invisible">Login</span>
                            </button>
                            <div className="text-grey-dark mt-14">
                                <div>

                                    <Link
                                        className=" no-underline border-b border-blue text-blue"
                                        to='/register'
                                    >
                                        Not a user ? Click here to register
                                    </Link>
                                    .
                                </div>
                                <div className='mt-3'>
                                    <Link style={{ color: "black", textDecoration: "none" }} to='/forgot-password'>Forgot Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </Layout>
    )
}

export default Login
