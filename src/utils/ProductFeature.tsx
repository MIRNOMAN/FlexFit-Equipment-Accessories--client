type TProduct = {
  imageUrl: string;
  name: string;
};

type ProductFeatureProps = {
  product: TProduct;
};

const productFeature: React.FC<ProductFeatureProps> = ({ product }) => {
  return (
    <div className="relative group overflow-hidden">
      {/* Product Image */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover button */}
      <button className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
          View Details
        </span>
      </button>
    </div>
  );
};

export default productFeature;
