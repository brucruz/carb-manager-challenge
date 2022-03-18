import * as Styles from './StarRating.styles';
import { ReactComponent as EmptyStar } from '../../assets/empty_star.svg';
import { ReactComponent as FilledStar } from '../../assets/filled_star.svg';

export type StarDimensions = {
  width: string;
  height: string;
};

export interface StarRatingProps {
  totalStars: number;
  activeStars: number;
  starDimensions: StarDimensions;
}

export function StarRating({
  activeStars,
  totalStars,
  starDimensions,
}: StarRatingProps): JSX.Element {
  return (
    <Styles.StarRatingContainer>
      {[...new Array(totalStars)].map((_, index) => {
        const activeState = activeStars;

        const showEmptyIcon = activeState === -1 || activeState < index + 1;

        const isActiveRating = activeState !== 1;
        const isRatingWithPrecision = activeState % 1 !== 0;
        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
        const showRatingWithPrecision =
          isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

        return (
          <Styles.StarRatingInnerContainer
            key={index}
            starDimensions={starDimensions}
          >
            <Styles.StarRatingFilled
              width={
                showRatingWithPrecision ? `${(activeState % 1) * 100}%` : '0%'
              }
            >
              <FilledStar />
            </Styles.StarRatingFilled>

            <div>{showEmptyIcon ? <EmptyStar /> : <FilledStar />}</div>
          </Styles.StarRatingInnerContainer>
        );
      })}
    </Styles.StarRatingContainer>
  );
}
