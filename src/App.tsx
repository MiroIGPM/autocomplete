import './App.css';

import { useEffect, useState } from 'react';

import { AutoComplete } from './components/auto-complete/AutoComplete';
import { fetchData } from './services/fetch-data/fetch-data';

function App() {
  const [autoCompliteData, setAutoCompleteData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchData();
      setAutoCompleteData(data as any);
    } catch (error) {
      console.error('Error while fetching data', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">LOADING</div>
      ) : (
        <AutoComplete autoCompleteData={autoCompliteData} />
      )}
    </div>
  );
}

export default App;
