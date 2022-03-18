import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PremiumRecipeCard } from './PremiumRecipeCard.comp';
import { Recipe } from '../../@types/Recipe';

describe('PremiumRecipeCard.comp.tsx', () => {
  it('should render', () => {
    render(<PremiumRecipeCard recipe={{} as Recipe} energyUnit="calories" />);

    // expect(screen.getByText('PremiumRecipeCard')).toBeInTheDocument();
  });
});
