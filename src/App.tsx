import React from 'react';
import { ReactComponent as Logo } from './assets/cm-logo.svg';
import { PremiumRecipeCard } from './components/PremiumRecipeCard/PremiumRecipeCard.comp';

function App() {
  return (
    <div id="app">
    <div className="cm-container">
      <div className="cm-logo-wrapper">
        <Logo className="cm-logo"/>
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <ul>
        <li className="premium-recipe">
          <PremiumRecipeCard />
        </li>
      </ul>
    </div>
  </div>
  );
}

export default App;
