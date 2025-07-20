import React, { useEffect, useState } from 'react'
import Button from './components/Button'
import AutoIncrement from './components/AutoIncrement'

const App = () => {

  const [count, setCount] = useState(() => {
    const SavedCount = localStorage.getItem('count')
    return SavedCount ? JSON.parse(SavedCount) : 0
  })
  const [totalClicks, setTotalClicks] = useState(() => {
    const SavedClicks = localStorage.getItem('totalClicks')
    return SavedClicks ? JSON.parse(SavedClicks) : 0
  })
  const [lastClickTime, setLastClickTime] = useState(() => {
    const savedClickTime = localStorage.getItem('clicktime');
    return savedClickTime ? JSON.parse(savedClickTime) : null
  })

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
    localStorage.setItem('totalClicks', JSON.stringify(totalClicks))
    localStorage.setItem('clicktime', JSON.stringify(lastClickTime))
  }, [count, totalClicks, lastClickTime])

  function handleIncrement() {
    if (count < 10) {
      setCount(count + 1)
      setTotalClicks(totalClicks + 1)
      setLastClickTime(new Date().toLocaleTimeString())
    }
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1)
      setTotalClicks(totalClicks + 1)
      setLastClickTime(new Date().toLocaleTimeString())
    }
  }

  function handleReset() {
    setTotalClicks(0)
    setLastClickTime(false)
    setCount(0)

  }



  return (
    <div style={{ maxWidth: '290px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: 'black'}}>React Counter App</h1>
      <AutoIncrement/>
      <h2 style={{ color: '#00ff99'}}>Manual Increment With Local Storage</h2>
      <Button onClick={handleIncrement}
        lable={"Increment"}
        style={{
        backgroundColor: count === 10 ? 'red' : '',
        color: count === 10 ? 'white' : '',
        }}
        disabled={count === 10}
      />
      <p>{count}</p>
      <Button 
      onClick={handleDecrement}
      style={{
      backgroundColor: count === 0 ? 'red' : '',
      color: count === 0 ? 'white' : '',
      }}
      disabled={count===0}
      lable={"Decrement"}
      />
      <button
        onClick={handleReset}>Reset</button>
      <p>The total number of clicks are : {totalClicks}</p>
      <p>Last click time : {lastClickTime ? lastClickTime : 'No clicks yet'} </p>
    </div>
  )
}

export default App
