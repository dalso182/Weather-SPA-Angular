import { SpeedPipe } from './speed.pipe';

describe('SpeedPipe', () => {
  it('create an instance', () => {
    const pipe = new SpeedPipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert m/s to km/h', () => {
    const pipe = new SpeedPipe();
    const input = '8.2'
    const unit = 'km/h';
    expect(pipe.transform(input, unit)).toBe(29.52);
  });
  it('should convert m/s to m/h', () => {
    const pipe = new SpeedPipe();
    const input = '8.2'
    const unit = 'm/h';
    expect(pipe.transform(input, unit)).toBe(18.342579999999998);
  });
});
