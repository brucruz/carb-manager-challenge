export function adjustPreparationTime(minutes: number): string {
  if (minutes < 0) {
    return '0 min';
  }

  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    const minutesLeft = minutes % 60;
    return `${hours} hr ${minutesLeft} min`;
  }

  return `${minutes} min`;
}
