import React from 'react'

 function Title() {
  //console.log("Rendering Title");
  return (
    <h3>
      Using useCallback Hook
    </h3>
  )
}
export default React.memo(Title)