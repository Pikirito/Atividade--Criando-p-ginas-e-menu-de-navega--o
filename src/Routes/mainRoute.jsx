import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Projects } from "../Pages/Projects";
import { Depoiments } from "../Pages/DepoimentsPage";
import { ContactPage } from "../Pages/ContactPage";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/depoiments" element={<Depoiments />} />
      <Route path="/contacts" element={<ContactPage />} />
    </Routes>
  );
};
