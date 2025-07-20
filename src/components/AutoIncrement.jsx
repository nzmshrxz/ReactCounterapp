import React, { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'

const AutoIncrementCounter = () => {
  const [limit, setLimit] = useState(20)
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [speed, setSpeed] = useState(500)


  useEffect(() => {
    let inveralId = null;

    if (isRunning) {
      inveralId = setInterval(() => {
        setCount(prevCount => {
          if (prevCount >= limit) {
            clearInterval(inveralId)
            setIsRunning(false)
            return prevCount
          }
          return prevCount + 1
        })
      }, speed);
    }

    return () => clearInterval(inveralId)

  }, [isRunning, speed, limit])


  function resetCounter() {
    setCount(0)
    setIsRunning(false)

  }

  function startAndStopbtn() {
    if (!isRunning) {
      if (count < limit) {
        setIsRunning(true)
      }
    } else {
      setIsRunning(false)
    }
  }

  const progress = (count/limit)*100 //for progress bar loading 

  return (
    <div>
      <h2 style={{ color: '#00ff99' }}>Auto Increment Counter</h2>
      <p>Count: {count}</p>

     <ProgressBar progress={progress} color={count >= limit? 'red' : 'green'}/>

      <button
        style={{
          backgroundColor: isRunning ? 'red' : 'green',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          margin: '5px'
        }}
        onClick={startAndStopbtn}>
        {isRunning ? "Stop Auto" : "Start Auto"}
      </button>

      <button className='secondary-btn' onClick={resetCounter}>
        Reset
      </button>
      <div>
        <label>Speed (milliseconds): </label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          min={100}
          step={100}
        />

      </div>
      <div>
        <label>Limit: </label>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          min={20}
          step={10}
        />

      </div>
      {count >= limit && <p>🎉 Limit {limit} tak pahunch gaya!</p>}
    </div>
  )
}

export default AutoIncrementCounter
