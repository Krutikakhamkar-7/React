import React from "react"

const App = () => {
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input className='px-4 text-white py-3 m-5 text-xl type="text" placeholder="enter your name"' />
        <button className='px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'></button>
      </form>
    </div>
  )
}

export default App

