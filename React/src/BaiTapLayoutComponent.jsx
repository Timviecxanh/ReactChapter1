import React from "react";
import Header from "./header";
import Banner from "./banner";
import Item from "./item";
import Footer from "./footers";

const BaiTapLayoutComponent = () => {
  return (
    <>
      <Header />
      <Banner />

      {/* Khu vực chứa 4 Item */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid layout cho 4 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BaiTapLayoutComponent;
