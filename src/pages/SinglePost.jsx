import React, { useEffect, useState } from "react";
import supabase from "../SupabaseClient";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

function SinglePost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [otherPosts, setOtherPosts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("BlogPosts")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/");
      } else {
        setData(data);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("random_post")
        .select()
        .limit(3);

      if (error) {
        alert(error.message);
      }
      if (data) {
        setOtherPosts(data);
      }
    };

    fetchData();
  }, [id]);

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
    <div className="p-2 container lg:px-36 xl:w-2/3 m-auto flex flex-col lg:pt-10">
      <div className="">
        <div>
          <img
            className="rounded-md w-full"
            src={data?.blog_images[0]}
            alt={data?.title}
          />
        </div>
        <div>
          <h1 className="font-bold text-3xl mt-5 mb-2 text-neutral-800 capitalize">
            {data?.title}
          </h1>
          <h2 className="font-semibold text-neutral-700 text-lg">
            {data?.slug}
          </h2>
        </div>
        <div className="mt-3 flex gap-3 items-center">
          <img
            className="w-13 h-13 rounded-full object-cover"
            src={data?.profile_image}
            alt={data?.user_name}
          />
          <div className="">
            <h3 className="font-bold ">{data?.user_name}</h3>
            <p className="text-sm text-neutral-500">
              {new Date(data?.created_at).getDate()}{" "}
              {months[new Date(data?.created_at).getMonth()]}
            </p>{" "}
          </div>
        </div>

        <div className="my-2 mb-5">
          <div className="w-full h-1 bg-neutral-200"></div>
          <div className="w-full h-1 mt-1  bg-neutral-200"></div>
        </div>

        <div className="font-semibold text-neutral-600">
          {parse(`${data?.blog_content}`)}
        </div>
      </div>

      <div className="my-4 mb-5">
        <div className="w-full h-1 bg-neutral-200"></div>
        <div className="w-full h-1 mt-1  bg-neutral-200"></div>
      </div>

      <h1 className="text-3xl font-bold capitalize mt-10">
        other posts you may like:
      </h1>
      <div className="flex max-sm:flex-col gap-4 mt-5 mb-10">
        {otherPosts &&
          otherPosts.map((item) => (
            <Link
              key={item?.id}
              to={"/" + item?.id}
              className="flex-1 bg-neutral-100 px-2 py-5 rounded-md"
            >
              <div>
                <div>
                  <img
                    className="rounded-md w-full h-50 object-cover"
                    src={item?.blog_images[0]}
                    alt={item?.title}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-semibold capitalize mt-3 mb-1">
                    {item.title}
                  </h1>
                  <h2 className="text-neutral-700">
                    {item.slug.substr(0, 80)}...
                  </h2>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default SinglePost;
