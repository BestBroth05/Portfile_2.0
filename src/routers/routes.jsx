import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Portfile_2.0/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
