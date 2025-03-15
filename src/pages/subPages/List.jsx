import React, { useEffect, useState } from "react";
import supabase from "../../SupabaseClient";

function List() {
  const [blogList, setBlogList] = useState("");
  const [error, setError] = useState(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("BlogPosts").select();

      if (error) {
        console.log(error);
        setError(error);
      } else {
        setBlogList(data);
        setError(null);
        console.log(data);
      }
    };
    fetchData();
  }, []);

  console.log(blogList);

  return (
    <div className="mt-5 rounded-md overflow-hidden">
      <div className="bg-neutral-200 p-4 flex flex-col gap-4">
        {blogList &&
          blogList.map((item) => (
            <div className="bg-neutral-100 flex flex-col-reverse gap-3 sm:flex-row sm:p-4 justify-between p-2 rounded-md overflow-hidden">
              <div className="sm:w-3/4">
                <div className="flex gap-1 text-neutral-500">
                  <p>{item.user_name} -</p>
                  <p>
                    {new Date(item.created_at).getDay()}{" "}
                    {months[new Date(item.created_at).getMonth()]}
                  </p>
                </div>
                <h1 className="text-3xl font-bold mt-2 capitalize">{item.title}</h1>
                <h2 className="text-xl font-semibold text-neutral-600 mt-1">{item.slug}</h2>
                <div className="flex gap-2 my-2">
                  <p className="bg-neutral-200 rounded-full py-2 px-4 uppercase w-fit mt-2">
                    {item.category}
                  </p>
                  <button className="bg-green-300 cursor-pointer rounded-full py-2 px-4 capitalize w-fit mt-2">
                    Edit
                  </button>
                  <button className="bg-red-300 cursor-pointer rounded-full py-2 px-4 capitalize w-fit mt-2">
                    Delete
                  </button>
                </div>
              </div>
              <div className="rounded-md overflow-hidden max-sm:flex-1 h-auto sm:w-1/4">
                <img
                  className="w-full h-full object-cover object-top"
                  src={item.blog_images[0]}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default List;
