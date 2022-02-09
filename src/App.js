import React from "react";
import { Route, Routes } from "react-router-dom";

import {
    Index,
    Contact,
    Page404,
    NavBar,
    FindUs,
    OpeningHours,
    BakeMenuPage,
    Menu,
} from "./components";

// import ScrollToTop from "./components/hooks/ScrollToTop"

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Index />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/find-us" element={<FindUs />} />
                <Route path="/opening-hours" element={<OpeningHours />} />
                <Route path="/bake-menu" element={<BakeMenuPage />} />
                <Route path="/menu" element={<Menu />} />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    );
};

export default App;
