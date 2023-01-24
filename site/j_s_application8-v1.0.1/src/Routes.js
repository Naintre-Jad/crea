import React from "react";
import Page from "pages/Page";
import PageFour from "pages/PageFour";
import FrameNinetyTwo from "pages/FrameNinetyTwo";
import PageThree from "pages/PageThree";
import PageTwo from "pages/PageTwo";
import Pagedaccueil from "pages/Pagedaccueil";
import Formulairecontact from "pages/Formulairecontact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/formulairecontact" element={<Formulairecontact />} />
        <Route path="/pagedaccueil" element={<Pagedaccueil />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagethree" element={<PageThree />} />
        <Route path="/frameninetytwo" element={<FrameNinetyTwo />} />
        <Route path="/pagefour" element={<PageFour />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
