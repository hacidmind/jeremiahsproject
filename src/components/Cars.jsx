import React, { useState } from 'react';

const Cars = ({ brand, model, year }) => {

    const [car, setCar] = useState("")
    const [models, setModels] = useState("")

    let handleClick = () => {
        setCar(`The car you chose is a ${brand} ${model}, it was created in ${year}`)
    }

    let handleDelete = () => {
        console.log(`You deleted ${brand}`)
    }

    let handleModel = () => {
        setModels(`The ${brand} model is ${model}`)
    }

    return (
        <div>
            <p>Car Brand: {brand}</p>
            <p>Car Model: {model}</p>
            <p>Model Year: {year}</p>
            <p>{car}</p>
            <div>{models}</div>
            <button onClick={() => handleClick()}>Click Me</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleModel}>Model</button>
            <hr />
        </div>
    );
}

export default Cars;
