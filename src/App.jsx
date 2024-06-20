import './App.css'
import starIcon from "./assets/icon-star.svg"

function App() {
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
      <div className='w-1/3 h-fit p-10 rounded-[2.7rem]  flex flex-col container gap-5 text-white'>

        <div className='rounded-full bg-bubble flex items-center justify-center p-4 w-12 aspect-square'>
          <img src={starIcon} className='w-full' />
        </div>

        <h3 className='text-3xl font-bold mt-5'>How did we do?</h3>

        <div className='w-[95%] text-txt'>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </div>

        <div className='flex gap-8 text-center w-full'>
          {
            [1, 2, 3, 4, 5].map((key, item) => {
              return(
                <div className='rounded-full w-full aspect-square p-4 font-bold text-xl flex items-center justify-center text-txt bg-lgrey align-middle cursor-pointer hover:bg-orange hover:text-dgrey' key={key}>
                  {item}
                </div>
              )
            })
          }
        </div>
        
        <button className='text-lg text-dgrey font-semibold bg-orange rounded-full w-full py-3 mt-4 hover:bg-white'>
          SUBMIT
        </button>



      </div>
    </div>
  )
}

export default App
