import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import "./ProductDetail.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
  const { closeProductDetail, isProductDetailOpen, productToShow } =
    useShoppingCartContext();
  console.log("product to show:", productToShow);
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      }  product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <section className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <section>
          <XMarkIcon
            className="h-6 w-6 text-black"
            onClick={() => closeProductDetail()}
          />
        </section>
      </section>
      <section>
        <figure className="px-6">
          <img
            className="w-full h-full rounded-lg"
            src={productToShow.image}
            alt={productToShow.title}
          />
        </figure>
        <p className="flex flex-col p-6">
            <span className="font-medium text-2xl mb-2">${productToShow.price}</span>
            <span className="font-medium text-md">{productToShow.title}</span>
            <span className="font-light text-sm">{productToShow.category}</span>
        </p>
      </section>
    </aside>
  );
};

export default ProductDetail;
