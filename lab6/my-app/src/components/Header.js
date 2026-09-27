import React from "react"

function Header(props) {
    return (
        <header>
            <h1>Lab Work #7</h1>
            <h2>{props.name}</h2>
            <p>{props.birthInfo}</p>
            <p>{props.university}</p>
        </header>
    )
}

export default Header