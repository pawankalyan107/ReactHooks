import React, { useEffect } from "react";

const Child = ({returnComment}) => {

  useEffect(()=>{
    console.log('this function was called')
  }, [returnComment])

  return (
    <div>
      {returnComment(' Perdo ')}
    </div>
  )
}

export default Child