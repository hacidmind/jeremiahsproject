import React from 'react';
import "../css/Home.css";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="p-0 m-0 border-0 bd-example">
    
    
        <div className="position-relative text-bg-dark border border-0 rounded-0 text-center vh-100 overflow-hidden">
          
        <img src="https://picsum.photos/1920/1080" className="w-auto" alt="..." />
        
          <div className="card-img-overlay d-flex align-items-center justify-content-center bg-dark bg-opacity-25">
    
            <div className="card-body">
    
              <h1 className="card-title">Lorem Ipsum</h1>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel justo neque. Sed eget consequat ipsum, consectetur faucibus tortor.</p>
              <Link to="/blog" className="btn btn-primary">Go to Blog</Link>
              <p className="card-text"><small>Last updated 3 mins ago</small></p>
    
            </div>
    
          </div>
    
        </div>
        
      
   
        
      </div>
    );
}

export default Home;
