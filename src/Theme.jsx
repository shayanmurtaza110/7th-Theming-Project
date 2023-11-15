import React, { useEffect, useState } from 'react';
import "./App.css";

function Theme() {
     const [theme, setTheme] = useState("");

     const mode= ()=>{
        theme === "darktheme" ? setTheme("lighttheme"):setTheme("darktheme")
     }
     useEffect(() => {
     document.body.className=theme
     }, [theme])

  return (
    <>
      <nav>
        {
          theme=== "darktheme"?
          <button onClick={mode}>Enable Light Theme</button>
          :
          <button onClick={mode}>Enable Dark Theme</button>
        
        }
       
        <div><h1>BOOKFOLIO</h1></div>
      </nav>
      <main>
      
        <div><img src="./img/1.jpg" alt="" /></div>
        <div><img src="./img/2.jpg" alt="" /></div>
        <div><img src="./img/3.jpg" alt="" /></div>
        </main>
    </>
  )
}

export default Theme




// ternary condition:

// condition ? output1: output 2