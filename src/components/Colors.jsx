import React, {useState} from 'react';

const Colors = () => {

    const [color, setColor] = useState("")
    return (
        <div>
            <h1>My Favourite Color is: {color} </h1>

            <button onClick={()=> setColor("Red")}>Red</button>
            <button onClick={()=> setColor("Blue")}>Blue</button>
            <button onClick={()=> setColor("Crimson")}>Crimson</button>
        </div>
    );
}

export default Colors;
