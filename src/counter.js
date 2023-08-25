import { useState } from "react"

function counter() {

    const [value,setValue]=useState(0)

    const addcount =()=>{
        setValue +1
    }


  return (
    <div>
      <h1>count {value}</h1>
      <button onClick={addcount}>add</button>
    </div>
  )
}

export default counter
