import ProductList from "@/components/shared/product/product-list";
import { gatLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await gatLatestProducts();
  // Asegura que price y rating sean strings
  const products = latestProducts.map((p) => ({
    ...p,
    price: String(p.price),
    rating: String(p.rating),
  }));
  return (
    <div>
      <ProductList data={products} title="Newest Arrivals" />
    </div>
  );
}

export default HomePage;