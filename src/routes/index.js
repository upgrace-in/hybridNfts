import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FAQ from "../pages/FAQ";
import Mint from "../pages/Mint";
import AccessAllAreas from "../pages/AccessAllAreas";
import Gallery from "../pages/Gallery";
import GamingTables from "../pages/GamingTables";
import Hyhu from "../pages/Hyhu";
import Mercendise from "../pages/Mercendise";
import OverView from "../pages/OverView";

const Nav = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/overView" element={<OverView />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/mint" element={<Mint />} />
      <Route path="access-all-areas" element={<AccessAllAreas />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gaming-tables" element={<GamingTables />} />
      <Route path="/hyhu-raffles" element={<Hyhu />} />
      <Route path="/merchandise" element={<Mercendise />} />
    </Routes>
  );
};

export default Nav;
