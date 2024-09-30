import { tweets } from "./config";

const NewsLetter = () => {
  return (
    <div className="xxs:w-[90%] lg:w-1/4 m-5 text-white">

      <h1 className="text-2xl font-thin border-solid border-b-2 mb-5 px-0 py-2">Newsletter</h1>

      <article>
        <p className="font-thin text-xl mb-5">Subscribe to our newsletter and be the first to receive exclusive updates on new offers directly to your inbox!</p>
      </article>

      <label htmlFor="email" className="mb-1 block">Email</label>
      <input type="email" id="email" placeholder="Email" className="w-full text-base h-[40px] mb-5 bg-secondaryHeader border-solid border-white border-2 px-3 outline-none"/>

      <div className="text-right">
        <button type="submit" className="text-base h-[40px] mb-5 bg-secondaryHeader border-solid border-white border-2 px-3 outline-none uppercase">subscribe</button>
      </div>
    </div>
  )
};

export default NewsLetter;