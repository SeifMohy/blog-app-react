import "./App.css";
import Navbar from "./Comps/Navbar";
import Posts from "./Comps/Posts";
import PostPage from "./Pages/PostPage";
import HomePage from "./Pages/HomePage";
import ApiPage from "./Pages/ApiPage";
import ApiTests from "./Pages/ApiTests";
import Kanye from "./Pages/Kanye";

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
          <Route
            path="/"
            element={<HomePage setPosts={setPosts} posts={posts} />}
          />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/API" element={<ApiPage />} />
          <Route path="/APITests" element={<ApiTests />} />
          <Route path="/Kanye" element={<Kanye />} />
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

//const isPalindrome = (str) => {
  //   str = [...str]
  //   console.log(str)
  //   let str2 = str.map((a)=> {
  //     a.move(a.indexOf(), a.length)
  //   })
  //   console.log(str2)
  //   // if (str === str2){
  //   //   return true
  //   // }else{
  //   //   return false
  //   // }
// }
// isPalindrome("hey");