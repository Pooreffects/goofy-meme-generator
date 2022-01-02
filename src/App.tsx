import { useEffect, useState } from 'react';
import axios from 'axios';

const memesUrl = `https://meme-api.herokuapp.com/gimme`;

const App: React.FC = () => {
  const [memes, setMemes] = useState('');

  const getMemes = () => {
    axios
      .get(memesUrl)
      .then((res) => {
        setMemes(res.data.url);
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
      <div className="meme-container">
        <img src={memes} alt="Random Memes" />
      </div>
    </div>
  );
};

export default App;
