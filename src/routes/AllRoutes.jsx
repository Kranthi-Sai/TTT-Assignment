import { Routes, Route } from "react-router-dom";
import { Home, Courses } from "../pages";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
};
