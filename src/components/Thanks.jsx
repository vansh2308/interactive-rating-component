import thanksImg from "../assets/illustration-thank-you.svg"
import { useSelector } from "react-redux"

export default function Thanks(){
  const rating = useSelector(state => state.rating.value)

  return(
    <div className='w-[35%] max-[850px]:w-[90%] max-[850px]:p-5  items-center h-fit p-10 max-[850px]:rounded-[0.7rem] rounded-[2.7rem] flex flex-col container gap-5 text-white'>
      <img src={thanksImg} className="w-[40%]" />
      <span className="rounded-full bg-bubble text-sm py-2 px-5 text-orange font-light">You selected {rating} out of 5</span>
      <h3 className="font-bold text-3xl mt-3 mb-1">Thank you!</h3>
      <div className="text-txt text-center px-3">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</div>
    </div>
  )
}