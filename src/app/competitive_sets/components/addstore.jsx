import React from 'react'

const Addstore = (handleclose) => {
  return (
    <div className="flex w-full min-h-full z-50 bg-[#bbbabaeb] absolute">
    <div className="rounded-xl bg-[#ffff] flex flex-col m-auto p-4 ">
      <div className="top">
        <Image
          src={close}
          alt="cc"
          onClick={handleclose}
          className="w-[1.5em] mr-2 mt-2 float-right cursor-pointer"
        />
      </div>

      <div className="heading text-[1.5em] font-bold text-center">
        <h1>Add store</h1>
      </div>

      <div className="form flex flex-col p-4">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="text" className="text-[1.2em] font-bold mb-2 mt-2">
            Compset Name (Optional)
          </label>
          <input
            className="p-4 border w-[30em] rounded-lg mb-4"
            type="text"
            placeholder="Name your compset"
            value={compsetName}
            onChange={(e) => setCompsetName(e.target.value)}
          />
        
          <button
            type="submit"
            className="bg-[#2804ac] text-white text-[1.4em] w-full p-2 hover:bg-[#5c35af] rounded-xl m-auto mt-6"
          >
            Create New Compset
          </button>
        </form>
      </div>

      <p className="text-center text-[#2804ac] cursor-pointer" onClick={handleclose}>
        cancel
      </p>
    </div>
  </div>
  )
}

export default Addstore