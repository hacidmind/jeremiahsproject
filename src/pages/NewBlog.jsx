import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [founder, setFounder] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        // alert(`The title is ${title}: ${founder}: ${body}`)
        const blog ={title, founder, body}
        // console.log(blog);
        setIsLoading(true)
        fetch('https://my-json-server.typicode.com/hacidmind/cardb/blogs',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsLoading(false);
            navigate('/blog')
        })

    }
    return (
        <div className='container m-5 p-5'>

            <h1>Add New Blog</h1>

            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder="car-title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Founder</label>
                    <input type="text" className="form-control" placeholder="car-founder" value={founder} onChange={(e)=>setFounder(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="4" value={body} onChange={(e)=>setBody(e.target.value)} required></textarea>
                </div>
                <div className="d-grid gap-2">
                    {!isLoading && <button className="btn btn-outline-success" type="submit">Submit</button>}
                    {isLoading && <button className="btn btn-outline-success" type="submit">Adding Blog......</button>}
                </div>
            </form>
        </div>
    );
}

export default NewBlog;
