import { Header } from './components/Header';
import RecipesProvider from './contexts/RecipesContext';

import './styles/global.css';

function App() {
  return (
    <div className="App">
      <RecipesProvider>
        <Header />
      </RecipesProvider>
    </div>
  );
}

export default App;
