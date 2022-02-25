import React from "react";
import Helm from "../../Helm/Helm";

const Page404 = () => {
    return (
        <>
            <Helm
                title="404 - Yeu Bake Shop"
                ogTitle="404 - Yeu Bake Shop"
                description=""
                ogDescription=""
                link
                ogImage
            />
            <section className="404" style={{textAlign: "center"}}>
                <h1>Error Page. 404.</h1>
                <a href="/">Press to here come back!</a>
            </section>
        </>
    );
};

export default Page404;
