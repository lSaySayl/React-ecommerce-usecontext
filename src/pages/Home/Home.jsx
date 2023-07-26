import Card from "../../components/Card/Card";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { useProductsContext } from "../../context/ProductsContext";

const Home = () => {
  const { products } = useProductsContext();

  return (
    <>
      <h1>Home</h1>
      <ProductDetail/>
     <section className="grid grid-cols-4 grid- gap-4">
     {products?.map((product) => (
        <Card
          key={product.id}
          title={product?.title || "Nombre del Producto no disponible"}
          image={product?.images.length > 0 ? product.images[0] : null}
          category={product?.category?.name || "Categoría no disponible"}
          alt={product?.title || ""}
          price={product?.price || 0}
        />
      ))}
     
     </section>
    </>
  );
};

export default Home;
