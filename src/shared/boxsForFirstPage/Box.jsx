import React from 'react'

const Box = ({text , img}) => {
  return (
    <div>
        <div className='border-2 border-black rounded-[5px] w-[230px] h-[200px] hover:text-white flex flex-col items-center justify-center gap-2 text-[20px] hover:bg-[#DB4444]'>
            <div className='w-[100%] h-[80%]'>
            <img src={img} alt="" />
            </div>
            <h2 className='text-[18px]'>{text}</h2>
        </div>
    </div>
  )
}

export default Box