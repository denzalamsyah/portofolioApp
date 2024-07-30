import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../body/home";
// import Portofolio from "../body/portofolio";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="#portofolio" element={<Portofolio />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
