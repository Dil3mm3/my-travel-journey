// src/pages/JourneyDetail.jsx
import { useParams } from 'react-router-dom';
import journeys from '../data/journeys';

const JourneyDetail = () => {
  const { slug } = useParams();
  const journey = journeys.find((j) => j.slug === slug);

  if (!journey) {
    return <div className="p-6 text-center text-red-500">Sorry, looks like we haven't been there yet</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={journey.image} alt={journey.title} className="rounded-xl mb-4 w-full h-64 object-cover" />
      <h1 className="text-3xl font-bold mb-4">{journey.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: journey.content }} className="prose lg:prose-xl" />
    </div>
  );
};

export default JourneyDetail;
