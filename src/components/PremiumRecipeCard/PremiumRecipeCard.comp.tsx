import * as Styles from './PremiumRecipeCard.styles';
import food from '../../assets/food.png';
import { ReactComponent as Trophy } from '../../assets/trophy.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import { ReactComponent as Clock } from '../../assets/clock.svg';
import { ReactComponent as Cals } from '../../assets/cals.svg';
import { StarRating } from '../StarRating/StarRating.comp';

export function PremiumRecipeCard(): JSX.Element {
  return (
    <Styles.PremiumRecipeCardContainer>
      <Styles.PremiumRecipeCardHeader>
        <img src={food} alt="food" />

        <Styles.PremiumRecipeCardHeaderOverlay />

        <Styles.PremiumRecipeCardHeaderHoverOverlay />

        <Styles.PremiumRecipeCardFavButton>
          <Heart />
        </Styles.PremiumRecipeCardFavButton>

        <Styles.PremiumRecipeCardPremiumTag>
          <Trophy />
          <span>Premium Recipe</span>
        </Styles.PremiumRecipeCardPremiumTag>
      </Styles.PremiumRecipeCardHeader>
      <Styles.PremiumRecibeCardBottom>
        <Styles.PremiumRecipeCardTitle>
          Low Carb Thai Chicken Curry With Coconut Cauliflower Rice
        </Styles.PremiumRecipeCardTitle>

        <Styles.PremiumRecipeCardRatings>
          <StarRating
            activeStars={3}
            totalStars={5}
            starDimensions={{
              width: '11.85px',
              height: '12px',
            }}
          />

          <span>200 ratings</span>
        </Styles.PremiumRecipeCardRatings>
        <Styles.PremiumRecipeCardDetails>
          <Styles.PremiumRecipeCardTimeToMake>
            <Clock />

            <span>24 min</span>
          </Styles.PremiumRecipeCardTimeToMake>

          <Styles.PremiumRecipeCardCalories>
            <Cals />

            <span>489 Calories</span>
          </Styles.PremiumRecipeCardCalories>

          <Styles.PremiumRecipeCardMacros>
            <Styles.PremiumRecipeCardMacro macro="carbs">
              <div />
              <span>20g</span>
            </Styles.PremiumRecipeCardMacro>

            <Styles.PremiumRecipeCardMacro macro="protein">
              <div />
              <span>16g</span>
            </Styles.PremiumRecipeCardMacro>

            <Styles.PremiumRecipeCardMacro macro="fats">
              <div />
              <span>6g</span>
            </Styles.PremiumRecipeCardMacro>
          </Styles.PremiumRecipeCardMacros>
        </Styles.PremiumRecipeCardDetails>
      </Styles.PremiumRecibeCardBottom>
    </Styles.PremiumRecipeCardContainer>
  );
}
