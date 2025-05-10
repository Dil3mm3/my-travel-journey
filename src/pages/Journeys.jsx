import { Link } from 'react-router-dom';
import journeys from '../data/journeys';

const Journeys = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All My Journeys</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {journeys.map((journey) => (
          <Link
            to={`/journeys/${journey.slug}`}
            key={journey.id}
            className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={journey.image}
              alt={journey.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{journey.title}</h2>
              <p className="text-gray-600">{journey.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Journeys;
