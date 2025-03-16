import React from 'react'
import { useState, useEffect } from 'react';
import supabase from '../SupabaseClient';
import AboutCard from '../components/AboutCard';

function Technology() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("BlogPosts").select().limit(15).eq('category', "technology");

      if (error) {
        setError(error.message);
      }
      if (data) {
        setData(data);
      }
    };

    fetchData();
  }, []);

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


  return (
    <div className="container lg:px-36 m-auto flex justify-between lg:pt-10">
      <div className="flex flex-col gap-3 p-2 lg:w-3/4">
        {error && (
          <h1 className="bg-red-400 rounded-md font-bold text-2xl text-center p-5">
            {error}
          </h1>
        )}
        {data &&
          data.map((item) => (
            <div key={item.id} className="flex bg-neutral-200 rounded-md p-3 gap-2 ">
              <div className="w-2/3 flex flex-col gap-3">
                <h1 className="text-xl font-bold capitalize">{item.title}</h1>
                <h2 className="text-neutral-800 hidden md:block">
                  {item.slug}
                </h2>
                <div className="flex gap-3 items-center">
                  <img
                    className="w-8 h-8 rounded-full object-cover object-top"
                    src={item.profile_image}
                    alt="Profile image"
                  />
                  <div className="flex text-neutral-600 gap-3">
                    <p>{item.user_name}</p>
                    <p>
                      {new Date(item.created_at).getDate()}{" "}
                      {months[new Date(item.created_at).getMonth()]}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/3 h-auto rounded-md overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={item.blog_images[0]}
                  alt=""
                />
              </div>
            </div>
          ))}
      </div>

      <div className="hidden sticky top-10 h-fit lg:flex flex-col items-center w-1/4 bg-neutral-200 p-4 m-2 rounded-md">
          <AboutCard/>
      </div>
    </div>
  );
}

export default Technology