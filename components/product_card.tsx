"use client";

import Link from "next/link";
const ProductCard = () => {
  return (
    <>
      <Link href={"/"}>
        <div className="flex-col">
          <img
            src="https://cdn.midasbuy.com/images/midas_oversea/d0822bc614347fe2d14bbbdb3da6ae51.png"
            alt=""
          />
          <div className="flex items-center justify-center transition-all ease-in-out duration-150 bg-red-800 hover:bg-red-700 w-full h-8">
            <h1 className="text-center text-xs">Go</h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
