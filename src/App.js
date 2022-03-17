import "./App.css";
import Navbar from "./Comps/Navbar";
import Posts from "./Comps/Posts";
import PostPage from "./Pages/PostPage";
import HomePage from "./Pages/HomePage";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar setPosts={setPosts} posts={posts} />
        <Routes>
          <Route path="/" element={<HomePage setPosts={setPosts} posts={posts}/>} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

// const arr = [2,1,5,8,100];

// const fizzBuzz = (arr) => {
//   return arr.map((a) => {
//     if (a%2 ===0){
//       return "fizz"
//     }else{
//       return "buzz"
//     }
//   })
// }
// console.log(fizzBuzz(arr));

// const Num = [1,2,3,4,5,6,7,8,9,10]

// const multAll = ((Num) => {
//   let i = 0
//   let x = 1
//   while (Num.length < i++){
//     Num.map((a) => {
//       while (x++ != 10){
//         return a * x;
//       }
//     })
//   }
// });
//console.log(multAll(Num));
// failed this one
