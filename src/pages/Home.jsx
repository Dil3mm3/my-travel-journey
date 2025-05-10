import { Link } from 'react-router-dom';
import journeys from '../data/journeys';

const Home = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      
      {/* Contenuto principale */}
      <div className="md:col-span-3 space-y-6">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold">Explore the World</h1>
          <p className="text-gray-600 mt-2">Inspiration and advice from real adventure.</p>
        </section>

        {/* Lista viaggi */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Latest Journeys</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {journeys.map((j) => (
              <Link
                to={`/journeys/${j.slug}`}
                key={j.id}
                className="block bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
              >
                <img src={j.image} alt={j.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{j.title}</h3>
                  <p className="text-sm text-gray-600">{j.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">About Me</h3>
          <p className="text-sm text-gray-600">Hi! I'm Paolo, a travel lover sharing stories from across the globe.</p>
        </div>
        <div className="bg-white shadow p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Popular Posts</h3>
          <ul className="text-sm text-blue-600 space-y-1">
            <li><Link to="/journeys/iceland-adventure">Iceland Adventure</Link></li>
            <li><Link to="/journeys/peruvian-andes">Peruvian Andes</Link></li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Home;
