import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PremiumRecipeCard } from './PremiumRecipeCard.comp';
import { Recipe } from '../../App';

describe('PremiumRecipeCard.comp.tsx', () => {
  it('should render', () => {
    render(<PremiumRecipeCard recipe={{} as Recipe} />);

    expect(screen.getByText('PremiumRecipeCard')).toBeInTheDocument();
  });
});
