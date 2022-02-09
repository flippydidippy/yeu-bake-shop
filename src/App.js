import React from "react";
import { Route, Routes } from "react-router-dom";

import { Index, Contact, Page404, NavBar } from "./components";

// import ScrollToTop from "./components/hooks/ScrollToTop"

const App = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" exact element={<Index />} />
                <Route path="/Contact" exact element={<Contact />} />
                
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    );
};

export default App;
