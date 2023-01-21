import React, { useEffect, useState } from 'react';

const User = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        // code block
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then ((blog)=>{
                setData(blog);
            })

    }, [])
    return (
        <div>

        {
            data.map((item)=>(
                <div key={item.id}>
                    <h2>Name: {item.name}</h2>
                    <p><b>Email:</b> {item.email}</p>
                    <p><b>Address:</b> {item.address.street} {item.address.suite}</p>
                    <p><b>Website:</b> {item.website}</p>
                    <hr />
                </div>
            ))
        }
        </div>
    );
}

export default User;
