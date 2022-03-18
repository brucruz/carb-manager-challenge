export type EnergyUnit = 'kJ' | 'kcal';

export default function convertEnergyToUserPreferenceUnit(
  currentUnit: EnergyUnit,
  preferredUnit: EnergyUnit,
  value: number,
): number {
  if (currentUnit === preferredUnit) {
    return value;
  }

  switch (preferredUnit) {
    case 'kJ':
      switch (currentUnit) {
        case 'kcal':
          return value * 4.184;
        default:
          return value;
      }
    case 'kcal':
      switch (currentUnit) {
        case 'kJ':
          return value / 4.184;
        default:
          return value;
      }
    default:
      return value;
  }
}
