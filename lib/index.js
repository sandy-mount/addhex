/**
 * Add two or more hexadecimal values together
 * 
 * @param {...string} hexValues - Hexadecimal strings (with or without 0x prefix)
 * @returns {string} - Lowercase hexadecimal result (without 0x prefix)
 */
export function addHex (...hexValues) {
  if (hexValues.length === 0) {
    return '0';
  }

  let sum = 0n;

  for (const hex of hexValues) {
    // Handle hex strings with or without 0x prefix
    const cleanHex = hex.toLowerCase().startsWith('0x') ? hex.slice(2) : hex;

    // Convert to BigInt to handle large hex values
    try {
      sum += BigInt(`0x${cleanHex}`);
    } catch (e) {
      throw new Error(`Invalid hex value: ${hex}`);
    }
  }

  // Convert back to hex string without 0x prefix and in lowercase
  return sum.toString(16).toLowerCase();
}

export default {
  addHex
}; 