import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../components/Context/AuthContext";
import supabase from "../SupabaseClient";
import { useNavigate, Link, Outlet } from "react-router-dom";

function Dashboard() {
  const [error, setError] = useState("");
  const { session, setSession } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = supabase.auth.signOut();
    if (error) setError(error);
    else {
      navigate("/signin");
      setSession("");
    }
  };

    useEffect(() => {
      if (!session?.user) navigate("/signin");
    }, [session]);

  return (
    <div>
      {error && (
        <h1 className="bg-neutral-200 rounded-md m-2 text-center text-2xl sm:text-4xl text-red-500 p-5">
          {error}
        </h1>
      )}
      <div>
        <div className="h-40 bg-blue-500"></div>

        <div className="container p-2 lg:px-24 mx-auto -mt-30 sm:-mt-20">
          <div className="bg-neutral-100 p-5 rounded-md">
            <div className="bg-neutral-200 flex justify-center gap-5 rounded-md p-2">
              <Link to={"/dashboard/add"} className="max-sm:w-[45%]">
                <p className="px-7  text-center py-2 text-xl rounded-md text-white bg-blue-400">
                  Add
                </p>
              </Link>

              <Link to={"/dashboard/list"} className="max-sm:w-[45%]">
                <p className="px-7 text-center py-2 text-xl rounded-md text-white bg-blue-400">
                  List
                </p>
              </Link>
            </div>

            <Outlet />
          </div>
        </div>

        <div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
