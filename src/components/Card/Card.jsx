
import { useShoppingCartContext } from "../../context/ShoppingCartContext";


// eslint-disable-next-line react/prop-types
const Card = ({title,price,category,alt,image}) => {
const {count,setCount,showProduct,openProductDetail} = useShoppingCartContext()


const handleShowProduct = () => {
  showProduct(title, price, category, alt, image); // Pasa los atributos del producto al contexto
  openProductDetail();
};

  return (
    <section className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    onClick={handleShowProduct}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">{category}</span>
        <img className="w-full h-full object-cover rounded-lg" src={image} alt={alt}/>
        <span className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
        onClick={()=> setCount(count+1)}
        >+</span>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{title}</span>
        <span className="text-sm font-medium">{`$${price}`}</span>
      </p>
    </section>
  );
};

export default Card;
