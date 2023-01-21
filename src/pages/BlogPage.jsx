import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UseCustomHook from '../useCustomHook';

const BlogPage = () => {
    const { id } = useParams()
    const { data: vehicle, isLoading, isError } = UseCustomHook(`https://my-json-server.typicode.com/hacidmind/cardb/blogs/${id}`)
    const navigate = useNavigate()
    const handleDelete = () =>{
        fetch(`https://my-json-server.typicode.com/hacidmind/cardb/blogs/${id}`,{
            method: 'DELETE',
        }).then(()=>{
            navigate('/blog')
        })
    }

    return (
        <div>
            <div className="text-center">
                {isError && <div className="alert alert-danger" role="alert">
                    Error Fetching data!
                </div>}
                {isLoading ? <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> : ""}
            </div>
            {
                vehicle && (
                    <article className='container'>
                    <div className='row'>
                        <div className="col-6">
                        <h1>{vehicle.title}</h1>
                        </div>
                        <div className="col-6">
                        <button className='btn btn-danger float-end' onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                        <p>{vehicle.body}</p>
                        <i>Founded by {vehicle.founder}</i>
                    </article>
                )
            }
        </div>
    );
}

export default BlogPage;
