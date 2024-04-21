import { useGetProductsQuery } from "../../redux/api/apiSlice";
import ProductItem from "./ProductItem";

const Products = () => {
  const { data: products, loading, error } = useGetProductsQuery();

  if (loading) return "Yükleniyor...";
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="products max-h-[calc(100vh_-_124px)] min-h-[500px] overflow-y-auto">
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        }}>
        {products &&
          products.map((item) => <ProductItem key={item._id} {...item} />)}
      </div>
    </div>
  );
};
export default Products;
