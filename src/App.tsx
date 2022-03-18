import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from './assets/cm-logo.svg';
import { PremiumRecipeCard } from './components/PremiumRecipeCard/PremiumRecipeCard.comp';
import * as Styles from './styles/App.styles';

export interface Recipe {
  id: string;
  isPremium: boolean;
  isPublished: boolean;
  status: string;
  title: string;
  images: {
    id: string;
    url: string;
  }[];
  rating: {
    count: number;
    score: number;
  };
  details: {
    units: {
      proteins: string;
      carbs: string;
      fats: string;
      energy: 'kJ' | 'kcal';
    };
    nutrients: {
      proteins: number;
      carbs: number;
      fats: number;
    };
    energy: number;
    preparationTimeMinutes: number;
  };
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
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
          {recipes.map(recipe => (
            <li className="premium-recipe" key={recipe.id}>
              <PremiumRecipeCard recipe={recipe} />
            </li>
          ))}
        </Styles.CmRecipeGrid>
      </Styles.CmContainer>
    </div>
  );
}

export default App;
