import React from "react";
import { Route, Routes } from "react-router-dom";

import {
    Index,
    Contact,
    Page404,
    NavBar,
    FindUs,
    OpeningHours,
    BakeMenu,
    Menu,
} from "./components";

// import ScrollToTop from "./components/hooks/ScrollToTop"

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Index />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/FindUs" element={<FindUs />} />
                <Route path="/OpeningHours" element={<OpeningHours />} />
                <Route path="/BakeMenu" element={<BakeMenu />} />
                <Route path="/Menu" element={<Menu />} />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    );
};

export default App;
