import React from "react";
import { Helmet } from "react-helmet";

const Helm = ({
    title,
    description,
    link,
    ogImage,
    ogTitle,
    ogDescription,
    author,
}) => {

    return (
        <>
            <Helmet>
                {(title !== null || title !== "") && <title>{title}</title>}

                {(description !== null || description !== "") && (
                    <meta name="description" content={description} />
                )}
                {(author !== null || author !== "") && (
                    <meta name="author" content={author} />
                )}
                {(link !== null || link !== "") && (
                    <link rel="canonical" href={link} />
                )}
                {(ogImage !== null || ogImage !== "") && (
                    <meta property="og:image" content={ogImage} />
                )}
                {(ogDescription !== null || ogDescription !== "") && (
                    <meta property="og:description" content={ogDescription} />
                )}
                {(ogTitle !== null || ogTitle !== "") && (
                    <meta property="og:title" content={ogTitle} />
                )}

                {(title !== null || title !== "") && (
                    <meta name="twitter:title" content={title} />
                )}
            </Helmet>
        </>
    );
};

export default Helm;
