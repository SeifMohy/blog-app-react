import React from 'react'
import Posts from "../Comps/Posts"
import { Link } from "react-router-dom";

function HomePage({setPosts, posts}) {
    
  return (
    <div>
        <Posts posts={posts} setPosts={setPosts} />

    <Link to="/API">
    <h3>Read More!</h3>
    </Link>
    <Link to="/APITests">
    <h3>Some Jobs!</h3>
    </Link>
    <Link to="/Kanye">
    <h3>Kanye West!</h3>
    </Link>
    </div>
  )
}

export default HomePage