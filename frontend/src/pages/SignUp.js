import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [data, setData] = useState({
		email: "",
		password: "",
		name: "",
		confirmPassword: "",
		profilePic: "",
	})
	const navigate = useNavigate()

	const handleOnChange = (e) => {
		const { name, value } = e.target

		setData((preve) => {
			return {
				...preve,
				[name]: value
			}
		})
	}

	const handleUploadPic = async (e) => {
		const file = e.target.files[0]

		const imagePic = await imageTobase64(file)

		setData((preve) => {
			return {
				...preve,
				profilePic: imagePic
			}
		})

	}


	const handleSubmit = async (e) => {
		e.preventDefault()

		if (data.password === data.confirmPassword) {
			console.log(SummaryApi.signUP.url, SummaryApi.signUP.method);
			try{
				const dataResponse = await fetch(SummaryApi.signUP.url, {
					method: SummaryApi.signUP.method,
					body: JSON.stringify(data),
					headers: {
						"content-type": "application/json"
					}
				});

				console.log(dataResponse);

				var dataApi = await dataResponse.json()
			} catch(err){
				console.log(err);
			}

			if (dataApi.success) {
				toast.success(dataApi.message)
				navigate("/login")
			}

			if (dataApi.error) {
				toast.error(dataApi.message)
			}

		} else {
			toast.error("Please check password and confirm password")
		}

	}

	return (
		<section id='signup'>
			<div className='mx-auto container p-4'>

				<div className='bg-white p-5 w-full max-w-sm mx-auto'>

					{/* <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
						<div>
							<img src={data.profilePic || loginIcons} alt='login icons' />
						</div>
						<form>
							<label>
								<div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
									Upload  Photo
								</div>
								<input type='file' className='hidden' onChange={handleUploadPic} />
							</label>
						</form>
					</div> */}
					<h1 className="text-2xl font-thin border-solid border-b-2 border-secondaryHeader px-0 py-2">Sign up</h1>
					<form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
						<div className='grid'>
							<label className='block mb-2'>Name : </label>
							<div className="border-solid border-secondaryHeader border-2 py-2.5 px-0.5 text-lg mb-3">
								<input
									type='text'
									placeholder='Enter your name'
									name='name'
									value={data.name}
									onChange={handleOnChange}
									required
									className='w-full h-full outline-0 bg-transparent' />
							</div>
						</div>
						<div className='grid'>
							<label className='block mb-2'>Email : </label>
							<div className='border-solid border-secondaryHeader border-2 py-2.5 px-0.5 text-lg mb-3'>
								<input
									type='email'
									placeholder='Enter email'
									name='email'
									value={data.email}
									onChange={handleOnChange}
									required
									className='w-full h-full outline-none bg-transparent' />
							</div>
						</div>

						<div>
							<label className='block mb-2'>Password : </label>
							<div className='border-solid border-secondaryHeader border-2 py-2.5 px-0.5 text-lg mb-3 flex'>
								<input
									type={showPassword ? "text" : "password"}
									placeholder='Enter password'
									value={data.password}
									name='password'
									onChange={handleOnChange}
									required
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
						</div>

						<div>
							<label className='block mb-2'>Confirm Password : </label>
							<div className='border-solid border-secondaryHeader border-2 py-2.5 px-0.5 text-lg mb-3 flex'>
								<input
									type={showConfirmPassword ? "text" : "password"}
									placeholder='Re-type password'
									value={data.confirmPassword}
									name='confirmPassword'
									onChange={handleOnChange}
									required
									className='w-full h-full outline-none bg-transparent' />

								<div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((preve) => !preve)}>
									<span>
										{
											showConfirmPassword ? (
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
						</div>
						<div className="text-center text-white">
							<button type="submit" className="text-base h-[40px] bg-secondaryHeader border-solid border-white border-2 px-3 outline-none uppercase">sign up</button>
						</div>
						{/* <button className='text-base h-[40px] mb-5 bg-secondaryHeader border-solid border-white border-2 px-3 outline-none uppercase"'>Sign Up</button> */}

					</form>

					<p className='my-5'>Already have account ? <Link to={"/login"} className=' text-secondaryHeader-600 hover:text-secondaryHeader-700 hover:underline'>Login</Link></p>
				</div>


			</div>
		</section>
	)
}

export default SignUp