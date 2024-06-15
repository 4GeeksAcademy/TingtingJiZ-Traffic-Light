import React, { useState } from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState("")
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="row bg-dark" style={{borderRadius:"15%"}}>
                <div>
                    <div onClick={() => setColor("green")} className={`bg-success ${color == "green" ? "glow-green" : ""}`} style={{width:"150px", height:"150px", marginTop: "15%", borderRadius: "50%"}}></div>
                    <div onClick={() => setColor("yellow")} className={`bg-warning ${color == "yellow" ? "glow-yellow" : ""}`} style={{width:"150px", height:"150px",marginTop:"2%", marginBottom: "2%", borderRadius: "50%"}}></div>
                    <div onClick={() => setColor("red")} className={`bg-danger ${color == "red" ? "glow-red" : ""}`}style={{width:"150px", height:"150px", marginBottom: "15%", borderRadius: "50%"}}></div>
                </div>
            </div>
        </div>
    )
}

