#!/usr/bin/env node

import { addHex } from '../lib/index.js';
import { fileURLToPath } from 'url';
import path from 'path';

// Get current file name and directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get command line arguments (skip 'node' and script path)
const args = process.argv.slice(2);

// Show help if no arguments or help flag
if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  console.log(`
  addhex - Add hexadecimal values together

  Usage:
    addhex <hex1> [hex2] [hex3] ...

  Options:
    -h, --help     Show this help message

  Examples:
    addhex a b     # Result: 15
    addhex 0xff 1  # Result: 100
    addhex ff 0x1  # Result: 100
  `);
  process.exit(0);
}

try {
  // Call the main function with all provided arguments
  const result = addHex(...args);
  console.log(result);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
} 