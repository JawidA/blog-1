import React, { Suspense, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../components/Context/AuthContext";
import supabase from "../SupabaseClient";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorr, setErrorr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setSession } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorr("")

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setErrorr(error.message);
        setLoading(false)
        return
      }

      if (data) {
        setSession(data);
        navigate("/dashboard");
        setErrorr(null);
      }
    } catch (error) {
      setErrorr(error.message);
    }

  };

  return (
    <div className="m-2">
      <div className="bg-[#eee] max-w-[400px] mx-auto mt-30 p-5 rounded-md">
        {errorr && <h1 className="bg-neutral-300 p-3 text-center text-2xl text-red-500 font-bold capitalize rounded-md mb-5">{errorr}</h1>}
        {loading && <h1 className="bg-neutral-200 p-3 text-center text-2xl font-bold capitalize rounded-md mb-5">Loading...</h1>}
        <h1 className="text-xl font-semibold">Sign in to your account.</h1>
        <form
          onSubmit={handleSubmit}
          className="mt-7 flex flex-col gap-2 text-lg"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="bg-neutral-200 p-2 rounded-md"
            placeholder="Email"
            type="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="bg-neutral-200 p-2 rounded-md"
            placeholder="Password"
            type="password"
          />
          <button
            disabled={loading}
            className="bg-blue-400 text-white p-2 rounded-md mt-2"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
