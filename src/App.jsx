import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import AI from "./pages/AI";
import Health from "./pages/Health";
import Other from "./pages/Other";
import Technology from "./pages/Technology";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import List from "./pages/subPages/List";
import Add from "./pages/subPages/add";
import Edit from "./pages/subPages/Edit";
import SinglePost from "./pages/SinglePost";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/ai" element={<AI />} />
        <Route path="/health" element={<Health />} />
        <Route path="/other" element={<Other />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/add" element={<Add />} />
          <Route path="/dashboard/list" element={<List />} />
          <Route path="/dashboard/edit" element={<Edit />} />
        </Route>
        <Route path="/:id" element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
