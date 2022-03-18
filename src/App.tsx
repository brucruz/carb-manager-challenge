import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Recipe } from './@types/Recipe';
import { User } from './@types/User';
import { ReactComponent as Logo } from './assets/cm-logo.svg';
import { PremiumRecipeCard } from './components/PremiumRecipeCard/PremiumRecipeCard.comp';
import * as Styles from './styles/App.styles';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    axios.get('http://localhost:4001/user').then(response => {
      setUser(response.data as User);
    });
    axios.get('http://localhost:4001/recipes').then(response => {
      setRecipes(response.data as Recipe[]);
    });
  }, []);

  return (
    <div id="app">
      <Styles.CmContainer>
        <Styles.CmLogoWrapper>
          <Logo className="cm-logo" />
        </Styles.CmLogoWrapper>
        <h2>Carb Manager Dev Assignment</h2>
        <p>See the README file for assignment requirements.</p>

        <Styles.CmRecipeGrid>
          {recipes
            .filter(recipe => recipe.isPublished && !recipe.isDeleted)
            .map(recipe => (
              <li className="premium-recipe" key={recipe.id}>
                <PremiumRecipeCard
                  recipe={recipe}
                  energyUnit={user.energyUnits}
                />
              </li>
            ))}
        </Styles.CmRecipeGrid>
      </Styles.CmContainer>
    </div>
  );
}

export default App;
