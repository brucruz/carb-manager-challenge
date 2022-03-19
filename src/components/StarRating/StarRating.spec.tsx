import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { StarRating } from './StarRating.comp';

describe('StarRating.comp.tsx', () => {
  it('should render the component', () => {
    const starRating = (
      <StarRating
        activeStars={3}
        totalStars={5}
        starDimensions={{
          width: '10px',
          height: '10px',
        }}
      />
    );
    render(starRating);

    expect(screen.getByTestId('star-rating-container')).toBeInTheDocument();
  });
});
