import React from 'react'
import Photo from './Photo.jsx'

const Section2 = () => {
  return (
    <div className="bg-white  h-100 w-200  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

      <div className=" contant ml-3">
        <div className="flex items-center gap-82 m-4">

          <h4 className='font-light h-6 w-35 m-4 text-xs rounded-2xl bg-black  text-white flex justify-center items-center '>TARGET AUDIENCE</h4>

          <p className='rounded-2xl bg-white   w-60 text-xs text-black  text-center flex justify-center items-centerp-4'>DIGITAL BANKING PLATFORM</p>
        </div>
    <div className=" flex items-start gap-8 mb-5 ">
        <div >
          <p className=' p-4 w-40 h-29 font-bold text-2xl text-black text-left text-center m-4'>Prospective Customer segmentation</p>

          <p className=' w-50 font-light text-xs text-black ml-7'>Depending in customer statisfaction and access to banking products, potential target audience can be divided into three groups</p>
        </div>

        <div className='for the photo'>
          <Photo />
          </div></div>
      </div>
    </div>
  )
}

export default Section2
