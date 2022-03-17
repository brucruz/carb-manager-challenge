import * as Styles from './PremiumRecipeCard.styles';
import food from '../../assets/food.png';
import { ReactComponent as Trophy } from '../../assets/trophy.svg';
import { ReactComponent as HeartEmpty } from '../../assets/heart-empty.svg';

export function PremiumRecipeCard(): JSX.Element {
  return (
    <Styles.PremiumRecipeCardContainer>
      <Styles.PremiumRecipeCardHeader>
          <img src={food} alt="food" />

          <Styles.PremiumRecipeCardHeaderOverlay />

          <Styles.PremiumRecipeCardFavButton>
            <HeartEmpty />
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

      </Styles.PremiumRecibeCardBottom>
    </Styles.PremiumRecipeCardContainer>
  );
}
