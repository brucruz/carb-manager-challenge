import convertEnergyToUserPreferenceUnit from './convertEnergyToUserPreferenceUnit';

describe('convertEnergyToUserPreferenceUnit function', () => {
  it('should convert kcal to kJ, if the recipe is describe in kcal but the user preferes to see it in kJ', () => {
    const value = 120;
    const currentUnit = 'kcal';
    const preferredUnit = 'kJ';

    const result = convertEnergyToUserPreferenceUnit(
      currentUnit,
      preferredUnit,
      value,
    );

    expect(result).toBe(value * 4.184);
  });

  it('should convert kJ to kcal, if the recipe is describe in kJ but the user preferes to see it in kcal', () => {
    const value = 10000;
    const currentUnit = 'kJ';
    const preferredUnit = 'kcal';

    const result = convertEnergyToUserPreferenceUnit(
      currentUnit,
      preferredUnit,
      value,
    );

    expect(result).toBe(value / 4.184);
  });

  it('should return the same value, if the recipe is describe in kJ and the user preferes to see it in kJ', () => {
    const value = 10000;
    const currentUnit = 'kJ';
    const preferredUnit = 'kJ';

    const result = convertEnergyToUserPreferenceUnit(
      currentUnit,
      preferredUnit,
      value,
    );

    expect(result).toBe(value);
  });

  it('should return the same value, if the recipe is describe in kcal and the user preferes to see it in kcal', () => {
    const value = 10000;
    const currentUnit = 'kJ';
    const preferredUnit = 'kJ';

    const result = convertEnergyToUserPreferenceUnit(
      currentUnit,
      preferredUnit,
      value,
    );

    expect(result).toBe(value);
  });
});
