import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

function PostPage() {
  const { id } = useParams();
  console.log(id);

  const [post, setPost] = useState({});

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const post = posts.filter((a) => {
      return +a.id === +id;
    })[0];
    //  console.log({filtered: posts.filter(p=> +p.id === +id)[0].title});
    setPost(post);
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <ListGroup
        key={post.id}
        as="ul"
        className="bg-light w-75 m-5 p-2 align-content-between"
      >
        <div className="align-content-center justify-content-center">
          <ListGroup.Item id={post.id} className="bg-light">
            {post.post}
          </ListGroup.Item>
        </div>
        <div className="d-flex justify-content-end m-2">
          <div>
          </div>
        </div>
      </ListGroup>
    </div>
  );
}

export default PostPage;
