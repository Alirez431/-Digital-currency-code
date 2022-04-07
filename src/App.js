
import './App.css';
import Landing from './components/Landing';
function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false