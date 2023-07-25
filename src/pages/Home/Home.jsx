import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Card from "../../components/Card/Card";

const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <h1>Home</h1>
     <section className="grid grid-cols-5 grid- gap-4">
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
