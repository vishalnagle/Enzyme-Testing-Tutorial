import React, { useState } from "react"


const Forms = () => {
    const [type, setType] = useState("Yes")
    const [gender, setGender] = useState("male")

    const changeState = () => {
        setType("No")
    }

    const handleClick = (e) => {
        setGender(e.target.getAttribute("data-gender"))
    }

    return <div>
        <p>{type}</p>
        <button className="changeBtn" onClick={changeState}>Change</button>
        <button data-gender="male" onClick={handleClick} >male</button>
        <button data-gender="female" onClick={handleClick} >female</button>
        <div className={`box ${gender}`}>
            select {gender}
        </div>
    </div>

}


export default Forms