
import { useDispatch, useSelector } from "react-redux"
import { setRating } from "../features/ratingSlice"
import { setThanksDisplay } from "../features/thanksSlice"
import starIcon from "../assets/icon-star.svg"
import { useEffect } from "react"

export default function Rating() {
  const dispatch = useDispatch()
  const rating = useSelector(state => state.rating.value)
  const enabled = rating > 0


  return (
    <div className='w-[35%] max-[850px]:w-[90%] max-[850px]:p-5 max-[850px]:rounded-[0.7rem] h-fit p-10 rounded-[2.7rem]  flex flex-col container gap-5 text-white'>

      <div className='rounded-full bg-bubble flex items-center justify-center p-4 w-12 aspect-square'>
        <img src={starIcon} className='w-full' />
      </div>

      <h3 className='text-3xl font-bold mt-5'>How did we do?</h3>

      <div className='w-[95%] text-txt'>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </div>

      <div className='flex gap-5 max-[850px]:gap-2 justify-between text-center w-full'>
        {
          [1, 2, 3, 4, 5].map((item, key) => {
            return (
              <div
                className='rounded-full w-[15%] aspect-square font-bold text-xl flex items-center justify-center text-txt bg-lgrey align-middle cursor-pointer hover:bg-orange hover:text-dgrey' key={key}
                onClick={() => {
                  dispatch(setRating(item))
                }}
                style={rating == item ? { backgroundColor: "#fff", color: "#171e26" } : {}}
              >
                {item}
              </div>
            )
          })
        }
      </div>

      <button
        className='text-lg text-dgrey font-semibold bg-orange rounded-full w-full py-3 mt-4 hover:bg-white'
        onClick={() => { dispatch(setThanksDisplay(true)) }}
        type="submit"
        disabled = {!enabled}
      >
        SUBMIT
      </button>

    </div>
  )
}