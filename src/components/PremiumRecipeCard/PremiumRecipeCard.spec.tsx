import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PremiumRecipeCard } from './PremiumRecipeCard.comp';
import { Recipe } from '../../@types/Recipe';

describe('PremiumRecipeCard.comp.tsx', () => {
  it('should render the component', () => {
    const recipe: Recipe = {
      id: '1',
      title: 'Recipe 1',
      isPremium: true,
      isPublished: true,
      isDeleted: false,
      preparationTimeMinutes: 30,
      rating: {
        score: 4,
        count: 10,
      },
      status: 'ok',
      images: [
        {
          id: '1',
          url: 'https://via.placeholder.com/300x300',
        },
      ],
      details: {
        energy: 100,
        nutrients: {
          carbs: 10,
          fats: 20,
          proteins: 30,
        },
        units: {
          carbs: 'g',
          fats: 'g',
          proteins: 'g',
          energy: 'kcal',
        },
      },
    };

    render(<PremiumRecipeCard recipe={recipe} energyUnit="calories" />);

    expect(
      screen.getByTestId('premium-recipe-card-container'),
    ).toBeInTheDocument();
  });
});
