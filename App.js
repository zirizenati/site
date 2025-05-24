import React, { useEffect, useState } from "react";
import "./index.css";

const NEWS_API = "https://gnews.io/api/v4/search?q=bitcoin&lang=en&token=YOUR_API_KEY";

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(NEWS_API)
      .then((res) => res.json())
      .then((data) => setNews(data.articles || []))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">📊 BTC/USD Trading Dashboard</h1>
      <div className="mb-6">
        <iframe
          src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22COINBASE%3ABTCUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22200%22%2C%22dateRange%22%3A%22D%22%2C%22colorTheme%22%3A%22dark%22%2C%22trendLineColor%22%3A%22rgba(41%2C 98%2C 255%2C 1)%22%2C%22underLineColor%22%3A%22rgba(41%2C 98%2C 255%2C 0.3)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Atrue%7D"
          width="100%"
          height="200"
          allowtransparency="true"
          frameBorder="0"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mb-2">📰 Latest News</h2>
      <div className="space-y-3">
        {news.length === 0 && <p>Loading news...</p>}
        {news.map((article, idx) => (
          <div key={idx} className="bg-gray-800 p-3 rounded-lg shadow">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              <h3 className="text-lg font-medium">{article.title}</h3>
            </a>
            <p className="text-sm text-gray-400 mt-1">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
