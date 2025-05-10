import { addHex } from '../lib/index.js';

describe('addHex function', () => {
  test('adds two simple hex numbers', () => {
    expect(addHex('a', 'b')).toBe('15');
  });

  test('adds multiple hex numbers', () => {
    expect(addHex('10', '20', '30')).toBe('60');
  });

  test('handles 0x prefix', () => {
    expect(addHex('0xff', '0x1')).toBe('100');
  });

  test('mixed prefixes work correctly', () => {
    expect(addHex('ff', '0x1')).toBe('100');
  });

  test('returns lowercase result', () => {
    expect(addHex('A', 'B')).toBe('15');
    expect(addHex('F', 'F')).toBe('1e');
  });

  test('handles empty input', () => {
    expect(addHex()).toBe('0');
  });

  test('supports large values with BigInt', () => {
    expect(addHex('ffffffffffffffff', '1')).toBe('10000000000000000');
  });

  test('throws error for invalid hex', () => {
    expect(() => addHex('g')).toThrow('Invalid hex value: g');
  });
}); 