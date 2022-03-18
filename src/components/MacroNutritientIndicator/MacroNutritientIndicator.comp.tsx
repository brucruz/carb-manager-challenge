import * as Styles from './MacroNutritientIndicator.styles';

export type Nutrients = 'protein' | 'carbs' | 'fats';
export interface MacroIndicatorProps {
  nutrient: Nutrients;
  value: number;
  unit: string;
}

export function MacroIndicator({ nutrient, unit, value }: MacroIndicatorProps) {
  return (
    <Styles.PremiumRecipeCardMacro macro={nutrient}>
      <div />
      <span>
        {value}
        {unit}
      </span>
    </Styles.PremiumRecipeCardMacro>
  );
}
