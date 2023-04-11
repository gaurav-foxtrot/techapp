import React from 'react'


function LanguageSelector() {

const java8 = async()=>{

}

const java11 = async()=>{

}

const python3 = async()=>{

}

const python2 = async()=>{

}



  return (
    <div>
        <div className="relative w-full lg:max-w-sm  ">
           
            <div className=' pt-5 ml-14'>

            
            <select className="      text-gray-500 bg-white border rounded shadow-sm w-32 h-16 appearance-none focus:border-orange-600 text-center">
                <option onClick={java8}>JAVA 8</option>
                <option onClick={java11}>JAVA 11</option>
                <option onClick={python3}>Python 3</option>
                <option onClick={python2}>Python 2.8</option>
                </select>
                </div>
        </div>






    </div>
  )
}

export default LanguageSelector