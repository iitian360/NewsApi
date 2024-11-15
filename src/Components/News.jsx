import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const News = () => {
  const { category } = useParams(); // Extract category from the URL
  const [articles, setArticles] = useState([]); // Store fetched articles
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state
  const [selectedCard, setSelectedCard] = useState(null); // Track selected card index

  // API Key and URL
  const API_KEY = 'd71747e926fc43808ea818ff37f470d8';
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error state

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setArticles(data.articles || []); // Handle cases where articles might be undefined
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchNews();
  }, [category]); // Fetch data whenever category changes

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index); // Toggle card selection
  };

  return (
    <div className="News-main">

      <div className="all-news">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">Error: {error}</p>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              img={article.urlToImage}
              content={article.content}
              author={article.author}
              pdate={new Date(article.publishedAt).toLocaleDateString()} // Format date
              source={article.source.name}
              isSelected={selectedCard === index}
              onClick={() => handleCardClick(index)}
            />
          ))
        ) : (
          <p>No articles available for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default News;
