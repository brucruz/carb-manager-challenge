import { adjustPreparationTime } from './adjustPreparationTime';

describe('adjustPreparationTime function', () => {
  it('should return only x min if minutes < 60', () => {
    const minutes = 27;
    const expected = '27 min';
    const actual = adjustPreparationTime(minutes);
    expect(actual).toEqual(expected);
  });

  it('should return 0 min if minutes < 0', () => {
    const minutes = -34;
    const expected = '0 min';
    const actual = adjustPreparationTime(minutes);
    expect(actual).toEqual(expected);
  });

  it('should return x hr x min if minutes > 60', () => {
    const minutes = 95;
    const expected = '1 hr 35 min';
    const actual = adjustPreparationTime(minutes);
    expect(actual).toEqual(expected);
  });
});
