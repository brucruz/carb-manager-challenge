import * as Styles from './PremiumRecipeCard.styles';
import { ReactComponent as Trophy } from '../../assets/trophy.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import { ReactComponent as Clock } from '../../assets/clock.svg';
import { ReactComponent as Cals } from '../../assets/cals.svg';
import { StarRating } from '../StarRating/StarRating.comp';
import {
  MacroIndicator,
  MacroIndicatorProps,
} from '../MacroNutrientIndicator/MacroNutrientIndicator.comp';
import { Recipe } from '../../@types/Recipe';
import convertEnergyToUserPreferenceUnit from '../../utils/convertEnergyToUserPreferenceUnit';
import { adjustPreparationTime } from '../../utils/adjustPreparationTime';
import { HTMLAttributes } from 'react';

export interface PremiumRecipeCardProps extends HTMLAttributes<HTMLDivElement> {
  recipe: Recipe;
  energyUnit: string;
}

export function PremiumRecipeCard({
  recipe,
  energyUnit,
  ...rest
}: PremiumRecipeCardProps): JSX.Element {
  const macros: MacroIndicatorProps[] = [
    {
      nutrient: 'protein',
      value: recipe.details.nutrients.proteins,
      unit: recipe.details.units.proteins,
    },
    {
      nutrient: 'carbs',
      value: recipe.details.nutrients.carbs,
      unit: recipe.details.units.carbs,
    },
    {
      nutrient: 'fats',
      value: recipe.details.nutrients.fats,
      unit: recipe.details.units.fats,
    },
  ];

  return (
    <Styles.PremiumRecipeCardContainer
      {...rest}
      data-testid="premium-recipe-card-container"
    >
      <Styles.PremiumRecipeCardHeader imageUrl={recipe.images[0].url}>
        <Styles.PremiumRecipeCardHeaderOverlay />

        <Styles.PremiumRecipeCardHeaderHoverOverlay />

        <Styles.PremiumRecipeCardFavButton>
          <Heart />
        </Styles.PremiumRecipeCardFavButton>

        {recipe.isPremium && (
          <Styles.PremiumRecipeCardPremiumTag>
            <Trophy />
            <span>Premium Recipe</span>
          </Styles.PremiumRecipeCardPremiumTag>
        )}
      </Styles.PremiumRecipeCardHeader>
      <Styles.PremiumRecibeCardBottom>
        <Styles.PremiumRecipeCardTitle>
          {recipe.title}
        </Styles.PremiumRecipeCardTitle>

        <Styles.PremiumRecipeCardRatings>
          <StarRating
            activeStars={recipe.rating.score}
            totalStars={5}
            starDimensions={{
              width: '11.85px',
              height: '12px',
            }}
          />

          <span>
            {recipe.rating.count === 1
              ? `${recipe.rating.count} rating`
              : `${recipe.rating.count} ratings`}
          </span>
        </Styles.PremiumRecipeCardRatings>
        <Styles.PremiumRecipeCardDetails>
          <Styles.PremiumRecipeCardTimeToMake>
            <Clock />

            <span>{adjustPreparationTime(recipe.preparationTimeMinutes)}</span>
          </Styles.PremiumRecipeCardTimeToMake>

          <Styles.PremiumRecipeCardCalories>
            <Cals />

            <span>
              {convertEnergyToUserPreferenceUnit(
                recipe.details.units.energy,
                energyUnit === 'calories' ? 'kcal' : 'kJ',
                recipe.details.energy,
              ).toFixed(0)}{' '}
              {energyUnit}
            </span>
          </Styles.PremiumRecipeCardCalories>

          <Styles.PremiumRecipeCardMacros>
            {macros.map(macro => (
              <MacroIndicator key={macro.nutrient} {...macro} />
            ))}
          </Styles.PremiumRecipeCardMacros>
        </Styles.PremiumRecipeCardDetails>
      </Styles.PremiumRecibeCardBottom>
    </Styles.PremiumRecipeCardContainer>
  );
}
