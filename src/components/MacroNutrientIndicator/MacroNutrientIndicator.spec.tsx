import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MacroIndicator, Nutrients } from './MacroNutrientIndicator.comp';

describe('MacroNutrientIndicator.comp.tsx', () => {
  it('should render the component correct nutrient', () => {
    const carbsInput = {
      nutrient: 'carbs' as Nutrients,
      unit: 'g',
      value: 10,
    };
    const fatsInput = {
      nutrient: 'fats' as Nutrients,
      unit: 'g',
      value: 11,
    };
    const proteinInput = {
      nutrient: 'protein' as Nutrients,
      unit: 'g',
      value: 12,
    };

    const carbsMacroIndicator = (
      <MacroIndicator
        nutrient={carbsInput.nutrient}
        unit={carbsInput.unit}
        value={carbsInput.value}
      />
    );
    const fatsMacroIndicator = (
      <MacroIndicator
        nutrient={fatsInput.nutrient}
        unit={fatsInput.unit}
        value={fatsInput.value}
      />
    );
    const proteinMacroIndicator = (
      <MacroIndicator
        nutrient={proteinInput.nutrient}
        unit={proteinInput.unit}
        value={proteinInput.value}
      />
    );

    render(carbsMacroIndicator);
    render(fatsMacroIndicator);
    render(proteinMacroIndicator);

    const renderedCarbsMacroIndicator = screen.getByText(
      `${carbsInput.value}${carbsInput.unit}`,
    );
    const renderedFatsMacroIndicator = screen.getByText(
      `${carbsInput.value}${carbsInput.unit}`,
    );
    const renderedProteinMacroIndicator = screen.getByText(
      `${carbsInput.value}${carbsInput.unit}`,
    );

    expect(renderedCarbsMacroIndicator).toBeInTheDocument();
    expect(renderedFatsMacroIndicator).toBeInTheDocument();
    expect(renderedProteinMacroIndicator).toBeInTheDocument();
  });
});
