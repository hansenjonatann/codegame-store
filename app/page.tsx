import ProductCard from "@/components/product_card";

export default function Home() {
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}
