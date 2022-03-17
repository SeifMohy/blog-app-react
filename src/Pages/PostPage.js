import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

function PostPage() {
  
  const {id} = useParams();
  console.log(id);

  const [post,setPost] = useState({})

  useEffect(() => {
   const posts = JSON.parse(localStorage.getItem("posts"));
   const post = posts.filter((a)=> {
     return +a.id === +id
   })[0];
  //  console.log({filtered: posts.filter(p=> +p.id === +id)[0].title});
  setPost(post);
  }, []);


  return (
    <div>
      <h1>{id}</h1>
      {post.title}
    </div>
  )
}

export default PostPage