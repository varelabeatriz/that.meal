import { Header } from './components/Header';
import { RecipesContext } from './contexts/RecipesContext';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <RecipesContext.Provider value={'teste'}>
        <Header />
      </RecipesContext.Provider>
    </div>
  );
}

export default App;
