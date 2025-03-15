import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

function add() {
  const [userImageURL, setUserImageURL] = useState("");
  const [userName, setUserName] = useState("");
  const [category, setCategory] = useState("");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const [singleBlogImage, setSingleBlogImage] = useState("");
  const [blogImages, setBlogImages] = useState([]);

  const [content, setContent] = useState("");

  const handleAddURL = (e) => {
    e.preventDefault();
    if (singleBlogImage.length > 5) {
      setBlogImages(blogImages.concat(singleBlogImage));
      setSingleBlogImage("");
    }
  };

  const handlePostBlog = (e) => {
    e.preventDefault();

    console.log("Username: ", userName);
    console.log("Profile image: ", userImageURL);
    console.log("Category: ", category);
    console.log("title: ", title);
    console.log("slug: ", slug);
    console.log("Image array: ", blogImages);
    console.log("Content: ", content);

    setUserName("");
    setUserImageURL("");
    setTitle("");
    setSlug("");
    setSingleBlogImage("");
    setBlogImages([]);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "indent",
    "link",
    "image",
  ];

  return (
    <div>
      <div>
        <form className="flex flex-col gap-3 mt-9">
          <h1 className="text-2xl font-bold">Profile Info: </h1>
          <div className="flex gap-2 mb-3 flex-wrap">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="bg-neutral-200 flex-1 p-3 text-xl rounded-md"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              value={userImageURL}
              onChange={(e) => setUserImageURL(e.target.value)}
              className="bg-neutral-200 flex-1 p-3 text-xl rounded-md"
              type="text"
              placeholder="Enter Image URL"
            />
          </div>

          <div className="bg-neutral-200 flex flex-wrap items-center px-4 py-2 text-lg text-neutral-600 font-semibold rounded-md">
            <label htmlFor="cars">Select the Category :</label>
            <select className="bg-neutral-100 rounded-md p-2 max-sm:mt-2 max-sm:w-full sm:ml-10 w-70" name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                <option className="text-xl" value="ai">AI</option>
                <option className="text-xl" value="health">Health</option>
                <option className="text-xl" value="technology">Technology</option>
                <option className="text-xl" value="other">Other</option>
            </select>
          </div>

          <h1 className="text-2xl font-bold">Blog Info: </h1>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-neutral-200 p-3 text-xl rounded-md font-bold capitalize"
            type="text"
            placeholder="Enter Title"
          />
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="bg-neutral-200 p-3 text-xl rounded-md"
            type="text"
            placeholder="Enter Slug"
          />
          <div className="bg-neutral-200 flex rounded-md overflow-hidden ">
            <input
              value={singleBlogImage}
              onChange={(e) => setSingleBlogImage(e.target.value)}
              className="bg-neutral-200 w-full p-3 text-xl rounded-md"
              type="text"
              placeholder="Enter Image URL"
            />
            <button
              onClick={handleAddURL}
              className="bg-blue-400 px-6 text-xl text-white"
            >
              Add
            </button>
          </div>
          <div>
            <p>{blogImages.map((item) => item + ", ")}</p>
          </div>

          <ReactQuill
            className="text-2xl"
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
          />

          <button
            className="bg-blue-400 p-3 text-xl text-white rounded-md"
            onClick={handlePostBlog}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default add;
