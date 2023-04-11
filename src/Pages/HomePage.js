import React from 'react'
import InputBox from '../Components/InputBox'
import LanguageSelector from '../Components/LanguageSelector'
import Output from '../Components/Output'

function HomePage() {
  return (
    <div className=' pt-10 '>
      
      <div className='float-left px-9 m-9 pr-5'>
      <a className="px-4 py-2 ml-10 text-xl text-white rounded-full">
              Select Input Language
            </a>
        <LanguageSelector/>
        <InputBox/>
      </div>
    

        <div className=' float-right px-9 m-9 '>
        <a className="px-4 py-2 text-xl ml-10 text-white rounded-full">
              Select Output Language
            </a>
        <LanguageSelector/>
        <Output/>
        </div>

    </div>

  )
}

export default HomePage