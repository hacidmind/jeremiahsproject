import React from 'react';
import {Link} from 'react-router-dom'

const BlogList = ({ blogs, handleDelete }) => {
    return (
        <div className="container">
            {
                blogs.map((vehicle) => (
                    <div key={vehicle.id}>
                        <h2>{vehicle.title}</h2>
                        <p>{vehicle.body.slice(0, 200)} <Link to={`/blog/${vehicle.id}`}>Read more.....</Link> </p>
                        <i>Founded by {vehicle.founder}</i>
                        {/* <div>
                            <button className='btn btn-danger' onClick={()=>handleDelete(vehicle.id)}>Delete Blog</button>
                        </div> */}
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;
