import React, { useEffect } from 'react'
import axios from 'axios'
const About = () => {
    const [msg,setMsg] = React.useState('Click the button in about')
    const handleClick=async() => {
          try {
            const response = await axios.get('http://localhost:90/about')
            console.log(response)
            setMsg(response.data.msg)
          }
          catch (error) {
            console.log(error)
          }
    }
  return (
    <div style={{margin:"28vh 28vw",alignItems:"center",justifyContent:"center"}}>
        <h1>{msg}</h1>
        <button onClick={handleClick} style={{backgroundColor:"blue",color:"white",borderRadius:"10px",padding:"10px",fontSize:"20px"}}>Click Me</button>
    </div>
  )
}

export default About