import { CCodePipe } from './c-code.pipe';

describe('CCodePipe', () => {
  it('create an instance', () => {
    const pipe = new CCodePipe();
    expect(pipe).toBeTruthy();
  });
});
