import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import emailSender from '../helpers/emailSender';

const ForgotPassowrd = () => {
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      email: ""
    }
  });
  const {register, handleSubmit, formState} = form;
  const {errors} = formState;

  const onSubmit = async (data) => {
		const dataResponse = await fetch(SummaryApi.forgotPassword.url, {
			method: SummaryApi.forgotPassword.method,
			credentials: 'include',
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(data)
		})

		const apiResponse = await dataResponse.json();

    if (apiResponse.error) {
			return toast.error(apiResponse.message)
		}

		if (apiResponse.success) {
      const { data } = apiResponse;
      const { token , user } = data;
      const { email, name } = user;
      const templateParams = {
        name: name,
        email: email,
        link: `${process.env.REACT_APP_FRONT_END_URL}/reset-password?token=${token}`
      }
      emailSender().init()
      emailSender().sendEmail(templateParams).then((data) => {
        const { message } = data;
        toast.success(message)
      }).catch((error) => {
        console.log(error)
      });
		}

	}

  return (
    <div className="xxs:w-[90%] lg:w-1/4 m-5 bg-white mx-auto my-[5%] p-5">
      <h1 className="text-2xl font-thin border-solid border-b-2 border-secondaryHeader px-0 py-2">Forgot your password</h1>

      <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>

        {
          errors.email?.message ? <label htmlFor="email" className="block mb-1 text-errorText">{errors.email?.message}</label> : <label htmlFor="email" className="block mb-1">Enter your email</label>
        }
        <input type="email" id="email" {...register("email", {required: {
          value: true,
          message: "Your email is required"
        }})} placeholder="Enter registered email" className="border-solid border-secondaryHeader border-2 py-2.5 px-0.5 text-lg mb-3 outline-none"/>

        <div className="text-center text-white">
					<button type="submit" className="text-base h-[40px] bg-secondaryHeader border-solid border-white border-2 px-3 outline-none uppercase">reset password</button>
				</div>
      </form>
    </div>
  )
};

export default ForgotPassowrd;