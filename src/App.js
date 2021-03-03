import { Header } from './components/Header';
import { RecipesList }from './components/RecipesList';
import RecipesProvider from './contexts/RecipesContext';

import './styles/global.css';

function App() {
  return (
    <div className="App">
      <RecipesProvider>
        <Header />
        <RecipesList />
      </RecipesProvider>
    </div>
  );
}

export default App;
