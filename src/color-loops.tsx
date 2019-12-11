import * as React from 'react'

function ColorLoops() {
    let colors: Array<string> = ["red", "yellow", "orange"];

    return (
        <ul>
            {colors.map((value, index) => {
                return <li key={index} style={{ color: value }} > {value} </li>
            })}
        </ul>
    )
}

export default ColorLoops; 