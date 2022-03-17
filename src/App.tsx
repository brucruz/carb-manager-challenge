import React from 'react';
import { ReactComponent as Logo } from './assets/cm-logo.svg';
import { PremiumRecipeCard } from './components/PremiumRecipeCard/PremiumRecipeCard.comp';
import * as Styles from './styles/App.styles';

function App() {
  return (
    <div id="app">
    <Styles.CmContainer>
      <Styles.CmLogoWrapper>
        <Logo className="cm-logo"/>
      </Styles.CmLogoWrapper>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <ul>
        <li className="premium-recipe">
          <PremiumRecipeCard />
        </li>
      </ul>
    </Styles.CmContainer>
  </div>
  );
}

export default App;
