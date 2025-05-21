import React, { useRef , useState} from 'react'

const ClickTRacker = () => {
    const[showCount, setShowCount] = useState(0);
    const ClickCount = useRef(0);
    const handleClick = () => {
        ClickCount.current += 1;
        
        setShowCount(ClickCount.current);
    }
   const handleShowCount = () => {
        
    }
  return (
    <div>
        <h2>🔁 useRef Click Tracker</h2>
        <button onClick={handleClick}>
            Click Me (no-rerender)
        </button>
        <p>Click Count Shown: <strong>{showCount}</strong></p>
    </div>
  )
}

export default ClickTRacker