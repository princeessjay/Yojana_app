type SchemeCardProps = {
  title: string;
  description: string;
};

export default function SchemeCard({ title, description }: SchemeCardProps) {
  return (
    <div className="flex flex-col p-4 bg-white rounded shadow-md h-full">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 flex-grow">{description}</p>
      <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
        अधिक जानें
      </button>
    </div>
  );
}
