import React, { useState } from 'react'
import useDocumentTitle from '../CostomHooks/useDocumentTitle';

function DocTitle() {
    const [count,setCount] = useState(0);
    useDocumentTitle(count)
  return (
    <div>
        <button onClick={() =>{setCount(prev =>prev +1)}}>Count - {count}</button>
    </div>
  )
}

export default DocTitle