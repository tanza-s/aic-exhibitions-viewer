import { mapExhibition } from "./api/mappers";
import { Exhibition } from "./api/types";
import { ExhibitionHit } from "./exhibition-hit";

async function getExhibitions() {
  try {
    const res = await fetch(
      "https://api.artic.edu/api/v1/exhibitions?limit=10&include=artworks",
      { cache: 'no-store' }
    );
    
    if (!res.ok) {
      throw new Error(`Failed to fetch exhibitions: ${res.status} ${res.statusText}`);
    }
    
    const data = await res.json();
    
    if (!data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid data format received from API');
    }
    
    return data.data.map(mapExhibition);
  } catch (error) {
    console.error('Error fetching exhibitions:', error);
    return null;
  }
}

export default async function Exhibitions() {
  const exhibitions = await getExhibitions();
  
  let content;
  
  // API returns an error or invalid data
  if (exhibitions === null) {
    content = (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <svg className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-1">
              Unable to Load Exhibitions
            </h3>
            <p className="text-red-800 dark:text-red-200">
              We're having trouble connecting to the Art Institute of Chicago API. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // API returns empty array
  else if (exhibitions.length === 0) {
    content = (
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          No exhibitions are currently available.
        </p>
      </div>
    );
  }

  // API returns valid exhibitions
  else {
    content = (
      <ul className="space-y-8 divide-y divide-gray-200 dark:divide-gray-800">
        {exhibitions.map((exhibition: Exhibition) => (
          <li key={exhibition.id} className="pt-2 first:pt-0">
            <ExhibitionHit exhibition={exhibition} />
          </li>
        ))}
      </ul>
    );
  }
  
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Exhibitions</h2>
      {content}
    </section>
  );
}
