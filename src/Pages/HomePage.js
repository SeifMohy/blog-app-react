import React from 'react'
import Posts from "../Comps/Posts"

function HomePage({setPosts, posts}) {
    
  return (
    <div>
        <Posts posts={posts} setPosts={setPosts} />
    </div>
  )
}

export default HomePage