import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast";
import Spinner from '../../components/Layout/Spinner';

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [answer, setAnswer] = useState('');
    const [loding, setLoding] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoding(true)
            const res = await axios.post('/api/v1/auth/register', {
                name,
                username,
                email,
                password,
                phone,
                address,
                answer
            });
            setLoding(false)
            if (res && res.data.success) {
                setTimeout(function () {
                    toast.success(res.data && res.data.message);
                }, 1000);
                navigate("/login")
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            setLoding(false)
            toast.error("Something went wrong");

        }
    }
    return (
        <Layout >

            {loding && <Spinner />}
            {
                !loding &&
                <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container  max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 card">
                        <div className="bg-white px-6 py-8 rounded shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-black w-full xl:w-[40vw] lg:w-[50vw] md:w-[50vw]">
                            <form onSubmit={handleSubmit}>
                                <h1 className="mb-8 text-3xl text-center font-mono">Registre Page</h1>
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="fullname"
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="username"
                                    placeholder="UserName"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="phone"
                                    placeholder="Phone number"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="address"
                                    placeholder="Address"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="answer"
                                    placeholder="Who is your best friend?"
                                    onChange={(e) => setAnswer(e.target.value)}
                                />

                                <button type='submit' className="relative w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Create a Account</span>
                                    <span className="relative invisible">Create a Account</span>
                                </button>
                            </form>


                            <div className="text-grey-dark mt-14">

                                <Link
                                    className=" no-underline border-b border-blue text-blue"
                                    to='/login'
                                >
                                    Already have an account?   Log in
                                </Link>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            }



        </Layout>
    )
}

export default Register
