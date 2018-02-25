import { TfynPipe } from './tfyn.pipe';

describe('TfynPipe', () => {
  it('create an instance', () => {
    const pipe = new TfynPipe();
    expect(pipe).toBeTruthy();
  });

  it('when no args, returns yes :) when true', () => {
    const pipe = new TfynPipe();
    expect(pipe.transform(true)).toBe('Yes :)');
  });

  it('when no args, returns No :() when false', () => {
    const pipe = new TfynPipe();
    expect(pipe.transform(false)).toBe('No :(');
  });

  it('when args is not a string with a |, returns No :() when false and yes :) when true', () => {
    const pipe = new TfynPipe();
    expect(pipe.transform(true, 'invalidarg')).toBe('Yes :)');
    expect(pipe.transform(false, 'invalidarg')).toBe('No :(');
  });

  it('when args is a string with a |, returns left of | when true', () => {
    const pipe = new TfynPipe();
    expect(pipe.transform(true, {args: 'ok|notok'})).toBe('ok');
    // expect(pipe.transform(false, {args: '|notok'})).toBe('');
  });

  it('when args is a string with a |, returns right of | when false', () => {
    const pipe = new TfynPipe();
    expect(pipe.transform(true, {args: 'ok|notok'})).toBe('notok');
    // expect(pipe.transform(false, {args: 'ok|'})).toBe('');
  });
});
