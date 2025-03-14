import React, { useState } from "react";

function add() {

  const [userImageURL, setUserImageURL] = useState('')
  const [userName, setUserName] = useState('')

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')

  const [blogImages, setBlogImages] = useState(['image', 'photo', 'picutre']);



  const handleAddURL = (e) => {
    e.preventDefault();

    console.log(776)
  }

  const handlePostBlog = (e) => {
    e.preventDefault();

    console.log(userImageURL)
    console.log(userName)
    console.log(title)
    console.log(slug)
  }

  return (
    <div>
      <div>
        <form className="flex flex-col gap-3 mt-9">
          <h1 className="text-2xl font-bold">Profile Info: </h1>
          <div className="flex gap-2 mb-3 flex-wrap">
            <input onChange={(e) => setUserName(e.target.value)} className="bg-neutral-200 flex-1 p-3 text-xl rounded-md" type="text" placeholder="Enter Your Name"/>
            <input onChange={(e) => setUserImageURL(e.target.value)} className="bg-neutral-200 flex-1 p-3 text-xl rounded-md" type="text" placeholder="Enter Image URL"/>
          </div>

          <h1 className="text-2xl font-bold">Blog Info: </h1>
          <input onChange={(e) => setTitle(e.target.value)} className="bg-neutral-200 p-3 text-xl rounded-md font-bold capitalize" type="text" placeholder="Enter Title"/>
          <input onChange={(e) => setSlug(e.target.value)} className="bg-neutral-200 p-3 text-xl rounded-md" type="text" placeholder="Enter Slug"/>
          <div className="bg-neutral-200 flex rounded-md overflow-hidden ">
            <input className="bg-neutral-200 w-full p-3 text-xl rounded-md" type="text" placeholder="Enter Image URL"/>
            <button onClick={handleAddURL} className="bg-blue-400 px-6 text-xl text-white">Add</button>
          </div>
          <div><p>{blogImages.map((item) => item + ", ")}</p></div>

          <button onClick={handlePostBlog}>Post</button>
        </form>
      </div>
    </div>
  );
}

export default add;
