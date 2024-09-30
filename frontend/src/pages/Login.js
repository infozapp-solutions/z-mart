import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [data, setData] = useState({
		email: "",
		password: ""
	})
	const navigate = useNavigate()
	const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)

	const handleOnChange = (e) => {
		const { name, value } = e.target

		setData((preve) => {
			return {
				...preve,
				[name]: value
			}
		})
	}


	const handleSubmit = async (e) => {
		e.preventDefault()

		const dataResponse = await fetch(SummaryApi.signIn.url, {
			method: SummaryApi.signIn.method,
			credentials: 'include',
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(data)
		})

		const dataApi = await dataResponse.json()

		if (dataApi.success) {
			toast.success(dataApi.message)
			navigate('/')
			fetchUserDetails()
			fetchUserAddToCart()
		}

		if (dataApi.error) {
			toast.error(dataApi.message)
		}

	}

	console.log("data login", data)

	return (
		<section id='login'>
			<div className='mx-auto container p-4'>

				<div className='bg-white p-5 w-full max-w-sm mx-auto'>
					{/* <div className='w-20 h-20 mx-auto'>
						<img src={loginIcons} alt='login icons' />
					</div> */}
					<h1 className="text-2xl font-thin border-solid border-b-2 border-secondaryHeader px-0 py-2">Sign in</h1>
					<form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
						<div className='grid'>
							<label className='block mb-2'>Email : </label>
							<div className="border-solid border-secondaryHeader border-2 py-2.5 px-0.5 text-lg mb-3">
								<input
									type='email'
									placeholder='Enter your email'
									name='email'
									value={data.email}
									onChange={handleOnChange}
									className='w-full h-full outline-none bg-transparent' />
							</div>
						</div>

						<div>
							<label className='block mb-2'>Password : </label>
							<div className='border-solid border-secondaryHeader border-2 py-2.5 px-0.5 text-lg mb-3 flex'>
								<input
									type={showPassword ? "text" : "password"}
									placeholder='Enter your password'
									value={data.password}
									name='password'
									onChange={handleOnChange}
									className='w-full h-full outline-none bg-transparent' />
								<div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
									<span>
										{
											showPassword ? (
												<FaEyeSlash />
											)
												:
												(
													<FaEye />
												)
										}
									</span>
								</div>
							</div>
							<Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-secondaryHeader-600'>
								Forgot password ?
							</Link>
						</div>
						<div className="text-center text-white">
							<button type="submit" className="text-base h-[40px] bg-secondaryHeader border-solid border-white border-2 px-3 outline-none uppercase">sign in</button>
						</div>
						{/* <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button> */}

					</form>

					<p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-secondaryHeader-600 hover:text-secondaryHeader-700 hover:underline'>Sign up</Link></p>
				</div>


			</div>
		</section>
	)
}

export default Login