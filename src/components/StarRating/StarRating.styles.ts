import styled from 'styled-components';
import { StarDimensions } from './StarRating.comp';

export const StarRatingContainer = styled.div`
  display: inline-flex;
  position: relative;
  text-align: left;
`;
export const StarRatingInnerContainer = styled.div<{
  starDimensions?: StarDimensions;
}>`
  position: relative;

  svg {
    ${props =>
      props.starDimensions &&
      `
      width: ${props.starDimensions.width};
      height: ${props.starDimensions.height};
    `}
  }
`;

export const StarRatingFilled = styled.div<{ width: string }>`
  width: ${props => props.width};
  overflow: hidden;
  position: absolute;
`;
