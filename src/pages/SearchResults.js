import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './PageStyles.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      if (!query) {
        setResults([]);
        setLoading(false);
        return;
      }
      
      // Perform a search query against courses in Supabase
      // Using ilike for case-insensitive search
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .ilike('title', `%${query}%`);
        
      if (error) {
        console.error('Search error:', error);
        // Fallback dummy results if DB is not set up
        const dummyCourses = [
          { slug: 'data-science', title: 'Data Science Masterclass', description: 'Learn data science from experts.' },
          { slug: 'ai', title: 'Artificial Intelligence', description: 'Deep learning and AI engineering.' }
        ];
        const filtered = dummyCourses.filter(c => c.title.toLowerCase().includes(query.toLowerCase()));
        setResults(filtered);
      } else {
        setResults(data || []);
      }
      
      setLoading(false);
    };

    fetchResults();
  }, [query]);

  return (
    <div className="page-container" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="page-title" style={{ textAlign: 'left', fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1rem' }}>
          Search Results
        </h1>
        <p style={{ color: '#888', marginBottom: '3rem' }}>Showing results for "{query}"</p>
        
        {loading ? (
          <div className="loader">Searching...</div>
        ) : (
          <div className="search-results-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {results.length === 0 ? (
              <p>No results found for your query. Try searching for "Data" or "AI".</p>
            ) : (
              results.map((result, idx) => (
                <div key={idx} className="search-result-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
                  <Link to={`/courses/${result.slug || result.id}`} style={{ display: 'block' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                      {result.title}
                    </h3>
                    <p style={{ color: '#ccc' }}>{result.description}</p>
                  </Link>
                </div>
              ))
            )}
            
            {/* Hardcoded static pages that match query as fallback */}
            {(query?.toLowerCase().includes('train') || query?.toLowerCase().includes('cert')) && (
              <div className="search-result-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
                <Link to={query.toLowerCase().includes('train') ? "/trainings" : "/certifications"} style={{ display: 'block' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                    {query.toLowerCase().includes('train') ? "Corporate & Live Trainings" : "Industry Certifications"}
                  </h3>
                  <p style={{ color: '#ccc' }}>Information about our {query.toLowerCase().includes('train') ? 'training' : 'certification'} programs.</p>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
