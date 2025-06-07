// ProductCard.tsx
type ProductCardProps = {
    image: string;
    title: string;
    description: string;
    onClick?: () => void;
  };
  
  export default function ProductCard({ image, title, description, onClick }: ProductCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4 w-full">
        <img src={image} alt={title} className="mx-auto h-28 object-contain" />
        <h3 className="font-semibold mt-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <button
          onClick={onClick}
          className="text-blue-500 text-xs mt-1 hover:underline"
        >
          see detail
        </button>
      </div>
    );
  }
  