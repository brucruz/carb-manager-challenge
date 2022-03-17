import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PremiumRecipeCard } from './PremiumRecipeCard.comp';

describe("PremiumRecipeCard.comp.tsx", () => {
  it('should render', () => {
    render(<PremiumRecipeCard />);

    expect(screen.getByText('PremiumRecipeCard')).toBeInTheDocument();
  });
});
