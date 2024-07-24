"use client";

import ProductCard from "./product_card";

const PopularSection = () => {
  return (
    <>
      <div className="flex-col ">
        <div className="flex justify-between">
          <h1 className="uppercase text-sm">permainan yang populer</h1>
        </div>

        <div className="grid grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default PopularSection;
