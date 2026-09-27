import React, { useState } from "react"

function Image(props) {
    var [widths, setWidths] = useState([props.initialWidth])

    function handleAdd() {
        setWidths(function (prev) {
            return prev.concat([props.initialWidth])
        })
    }

    function handleIncrease() {
        setWidths(function (prev) {
            if (prev.length === 0) return prev
            var copy = prev.slice()
            copy[copy.length - 1] = copy[copy.length - 1] + 50
            return copy
        })
    }

    function handleDecrease() {
        setWidths(function (prev) {
            if (prev.length === 0) return prev
            var copy = prev.slice()
            if (copy[copy.length - 1] > 50) {
                copy[copy.length - 1] = copy[copy.length - 1] - 50
            }
            return copy
        })
    }

    function handleRemove() {
        setWidths(function (prev) {
            return prev.slice(0, prev.length - 1)
        })
    }

    return (
        <div>
            {widths.map(function (w, index) {
                if (index === 0) {
                    return (
                        <a key={index} href={props.link} target="_blank" rel="noopener noreferrer">
                            <img src={props.src} alt={props.alt} width={w} />
                        </a>
                    )
                }
                return <img key={index} src={props.src} alt={props.alt} width={w} />
            })}

            <div className="image-controls">
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleIncrease}>Enlarge</button>
                <button onClick={handleDecrease}>Reduce</button>
                <button onClick={handleRemove}>Delete</button>
            </div>
        </div>
    )
}

export default Image