import React from 'react';
import './App.css';
import Breeds from './components/Breeds';
import Pages from './components/Pages';

function App() {

  const controller = new AbortController()
  const signal = controller.signal
  const [urlAPI, setUrlAPI] = React.useState('https://catfact.ninja/breeds')
  const [callAPI, setCallAPI] = React.useState(0)
  const [catsInfos, setCatsInfos] = React.useState({
    breeds: [],
    pages: [],
    current: 1
  })

  React.useEffect(() => {
    fetch(urlAPI, { signal })
      .then(response => response.json())
      .then(data => {
        setCatsInfos({
          breeds: data.data,
          pages: data.links,
          current: data.current_page
        })
      })
    return () => controller.abort()
  }, [callAPI])

  const getBreeds = (url) => {
    if (url !== null){
      setUrlAPI(url)
      setCallAPI(callAPI + 1)
    }
  }

  return (
    <div className="App">
      <h1>Liste des races de chats 😻</h1>

      <div className="pagination">
        {catsInfos.pages.map((link, key) => <Pages key={key} button={link} getBreeds={getBreeds} currentPage={catsInfos.current} />)}
      </div>

      <table className="breeds-list">
        <thead>
          <tr>
            <th>Breed</th>
            <th>Country</th>
            <th>Origin</th>
            <th>Coat</th>
            <th>Pattern</th>
          </tr>
        </thead>
        <tbody>
          {catsInfos.breeds.map((breed, key) => <Breeds key={key} breed={breed} />)}
        </tbody>
      </table>

      <div className="pagination">
        {catsInfos.pages.map((link, key) => <Pages key={key} button={link} getBreeds={getBreeds} currentPage={catsInfos.current} />)}
      </div>

      <footer>Coded with love by Jérôme, Loïc & Marc ❤</footer>

    </div>
  );
}

export default App;
