import React from 'react';
import BlogList from '../pages/BlogList';
import UseCustomHook from '../useCustomHook';

const Blog = () => {
const {data: blogs, isLoading, isError} = UseCustomHook('https://my-json-server.typicode.com/hacidmind/cardb/blogs')

  
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
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Blog;
