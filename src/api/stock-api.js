const basePath = "https://finnhub.io/api/v1";

const fetchData = async (url, options = {}) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    const err = new Error(`An error has occured: ${res.status}`);
    err.text = await res.text();
    throw err;
  }

  return res.json();
};
export const searchSymbol = (query) => {
  const params = new URLSearchParams({
    q: query,
    token: process.env.REACT_APP_API_KEY,
  });
  return fetchData(`${basePath}/search?${params}`);
};

export const fetchStockDetails = (stockSymbol) => {
  const params = new URLSearchParams({
    symbol: stockSymbol,
    token: process.env.REACT_APP_API_KEY,
  });
  return fetchData(`${basePath}/stock/profile2?${params}`);
};

export const fetchQuote = (stockSymbol) => {
  const params = new URLSearchParams({
    symbol: stockSymbol,
    token: process.env.REACT_APP_API_KEY,
  });

  return fetchData(`${basePath}/quote?${params}`);
};

export const fetchHistoricalData = async (
  stockSymbol,
  resolution,
  from,
  to
) => {
  const params = new URLSearchParams({
    symbol: stockSymbol,
    resolution: resolution,
    from: from,
    to: to,
    token: process.env.REACT_APP_API_KEY,
  });

  return fetchData(
    `${basePath}/stock/candle?${params}&/resolution=${params}&from=${params}&to=${params}&${params}`
  );
};
