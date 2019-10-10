import { TempPipe } from './temp.pipe';

describe('TempPipe', () => {
  it('create an instance', () => {
    const pipe = new TempPipe();
    expect(pipe).toBeTruthy();
  });
  it('should convert Kelvin to Celsius', () => {
    const pipe = new TempPipe();
    const input = '286.79'
    const unit = 'c';
    expect(pipe.transform(input, unit)).toBe(13.640000000000043);
  });
  it('should convert kelvin to F', () => {
    const pipe = new TempPipe();
    const input = '286.79'
    const unit = 'f';
    expect(pipe.transform(input, unit)).toBe(56.55200000000008);
  });
});
