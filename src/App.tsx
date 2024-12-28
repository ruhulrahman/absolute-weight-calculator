// import './App.css'

import { useState } from "react";
import starImage from "./assets/star.png";

function App() {

  const [height, setHeight] = useState<string | undefined>(undefined);
  const [weight, setWeight] = useState<number>(0);

  const calculateWeight = () => {
    setWeight(0)
    if (height) {

      const feetToCm = parseFloat(height.split('.')[0]) * 30.48
      const inchesToCm = parseFloat(height.split('.')[1]) * 2.54
      const heightInCm = feetToCm + inchesToCm

      setWeight(parseInt((heightInCm - 100).toString()))
    }
  }

  return (
    <>
      <div className='w-[800px] mx-auto text-center pt-[100px]'>
        <h1 className='text-green-400 text-[32px]'>Absolute Weight Calculator</h1>
        {/* <p className='text-red-400'>Do you want to know your absolute weight?</p> */}
        <div className="flex items-center justify-center mb-3">
          <input type="number" step={0.01} name="height" value={height} onChange={(e) => setHeight(e.target.value)} id="" className='border border-gray-400 px-[10px] py-[5px] rounded-lg' placeholder='Enter your weight in feet' />
          <span className='pl-2'>Feet</span>
          <img src={starImage} alt="" className="w-[50px] animate-spin-slower ml-2" />
        </div>
        <button onClick={() => calculateWeight()} className='bg-purple-400 text-white px-4 py-2 rounded-lg min-w-[280px]'>Calculate</button>
        {weight > 0 && (
          <p className="mt-3 text-yellow-400">Your absolute weight is: {weight} kg</p>
        )}
      </div>
    </>
  )
}

export default App
