const Card = () => {
  return (
    <section className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics</span>
        <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphone" />
        <span className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">+</span>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">Headphone</span>
        <span className="text-sm font-medium">$400</span>
      </p>
    </section>
  );
};

export default Card;
