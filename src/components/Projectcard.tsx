type ProjectCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
};

export default function ProjectCard({
  image,
  category,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden w-full h-full">
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="p-6">
        <p className="text-sm text-gray-600 uppercase tracking-wider mb-1">{category}</p>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}
