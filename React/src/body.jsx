import React from "react";
import Banner from "./banner";
import Item from "./item";

const Body = () => {
  const items = [1, 2, 3, 4];

  return (
    <>
      <Banner />

      <div className="row gx-5">
        {items.map((i) => (
          <div key={i} className="col-lg-3 mb-5">
            <Item />
          </div>
        ))}
      </div>
    </>
  );
};
export default Body;
