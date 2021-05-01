import './App.css';
import { Header } from './components/Header';
import { PokemonContainer } from './components/PokemonContainer';
import { PokemonProvider } from "./hooks/usePokemon";
import './global.css';

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <Header />
        <PokemonContainer />
      </div>
    </PokemonProvider>
  );
}

export default App;
