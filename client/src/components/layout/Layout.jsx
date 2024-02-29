/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
function Layout({ children, title, description, keywords, author }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${title} - Shopify`}</title>
      </Helmet>
      <Navbar />
      <main className="mt-20">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
