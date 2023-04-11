
import { useEffect } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';


function App() {
  
  useEffect(()=>{
    
  },[])

const convert = async() => {

}


  return (
    <div className=' bg-slate-900'>
      <h1 className=' bg-slate-900 text-4xl text-center text-orange-600 mt-5' >Here's your CODE CONVERTER</h1>
      <HomePage/>
       <button onClick={convert} class="bg-transparent hover:bg-white text-orange-600 font-semibold hover:text-orange-600 py-2 px-4 border border-white hover:border-transparent rounded mt-96 ml-10">
  Convert
</button>
    </div>
  );
}

export default App;
