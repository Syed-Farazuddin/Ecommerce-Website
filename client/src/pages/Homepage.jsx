import React from "react";
import Layout from "../components/layout/Layout";
function Homepage() {
  return (
    <>
      <Layout
        title={"home"}
        description={"This is homepage of shopify"}
        author={"Syed Farazuddin"}
        keywords={"Ecommerce, Shopping, watches , Clothes, brands, Mobiles"}
      >
        <h1 className="mt-20 p-5 font-extrabold font-serif text-2xl ">
          Homepage
        </h1>
      </Layout>
    </>
  );
}

export default Homepage;
