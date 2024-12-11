import React, { useState } from "react";

function App() {
  const [color, setColor] = useState(""); 

  const buttonStyle = {
    margin: "10px",
    padding: "18px 35px",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s, background-color 0.2s",
    color: "black", 
  };

  return (
    <div
      style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column", backgroundColor: color}} >
      <h1 style={{ marginBottom: "20px" }}>Select Color</h1>

      <div>

        {/* Red Button */}
        <button onClick={() => setColor("red")} style={{...buttonStyle, backgroundColor: "red"}}>
          Red
        </button>

        {/* Blue Button */}
        <button onClick={() => setColor("blue")} style={{...buttonStyle, backgroundColor: "blue"}} >
          Blue
        </button>

        {/* Greeen Button */}
        <button onClick={() => setColor("green")} style={{...buttonStyle, backgroundColor: "green"}}>
          Green
        </button>

        {/* Yellow Button */}
        <button onClick={() => setColor("yellow")} style={{...buttonStyle, backgroundColor: "yellow"}}>
          Yellow
        </button>
      </div>

      <div className="mt-2">

        {/* Purple Button */}
        <button onClick={() => setColor("purple")} style={{...buttonStyle, backgroundColor: "purple"}}>
          Purple
        </button>

        {/* Cyan Button */}
        <button onClick={() => setColor("cyan")} style={{...buttonStyle, backgroundColor: "cyan"}} >
          Cyan
        </button>

        {/* Lime Button */}
        <button onClick={() => setColor("lime")} style={{...buttonStyle, backgroundColor: "lime"}}>
          Lime
        </button>

        {/* Grey Button */}
        <button onClick={() => setColor("grey")} style={{...buttonStyle, backgroundColor: "grey"}}>
          Grey
        </button>
      </div>

    </div>
  );
};

export default App;
