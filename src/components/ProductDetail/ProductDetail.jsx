import "./ProductDetail.css"
import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
    return (
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
        <section className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <section>
            <XMarkIcon className="h-6 w-6 text-black"/>
       

            </section>

        </section>
            
        </aside>
    );
}

export default ProductDetail;
