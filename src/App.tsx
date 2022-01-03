import axios from 'axios';
import { useEffect, useState } from 'react';

const memesUrl = `https://api.giphy.com/v1/clips/trending?api_key=${process.env.API_KEY}`;

const App: React.FC = () => {
  const [memes, setMemes] = useState([]);

  const getMemes = () => {
    axios
      .get(memesUrl)
      .then((res) => {
        /* setMemes(res.data.url); */
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMemes();
  }, []);

  const handleClick = () => {
    getMemes();
  };

  return (
    <div className="app">
      <div className="app-hero">
        <h1>Get Cringy Memes with Dede!</h1>
        <button onClick={handleClick}>Generate!</button>
      </div>
      <div className="meme-container"></div>
    </div>
  );
};

export default App;
