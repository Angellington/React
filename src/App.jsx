import React, { useState } from 'react';


function App() {
  // Define o estado padrao em uma destruct
  const [count, setCount] = useState(4)

  function decrementCount() {
    setCount(prevCount => prevCount -4)
  }
  function increaseCount() {
    setCount(nextCount => nextCount +4)

  }

  return (
    <>
      <div className='flex justify-center p-5'>
        <button onClick={decrementCount} className='p-3 bg-slate-300'>-</button>
        <span className='p-3'>{count}</span>
        <button onClick={increaseCount} className='p-3 bg-slate-300'>+</button>
      </div>
    </>
  )
}

export default App