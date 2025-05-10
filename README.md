# AddHex

[![npm version](https://img.shields.io/npm/v/addhex.svg)](https://www.npmjs.com/package/addhex)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A lightweight utility for adding hexadecimal values with both library and CLI interfaces. Perfect for developers, engineers, and anyone working with hexadecimal calculations.

## Features

- ✨ Add any number of hex values together
- 🔄 Convert and output result in lowercase hex
- 📚 Use as a library in your project
- 🖥️ Use as a command-line tool
- 🚀 Handles large numbers with BigInt
- 🧩 Supports both "0x" prefixed and raw hex formats
- 📦 Available as ES Module

## Installation

### Global Installation (for CLI usage)

```bash
npm install -g addhex
```

### Local Installation (for programmatic usage)

```bash
npm install addhex
```

## Usage

### As a Library

```javascript
// ES Module import
import { addHex } from 'addhex'

// Add two hex values
console.log(addHex('a', 'b')) // '15'

// Add multiple hex values
console.log(addHex('10', '20', '30')) // '60'

// Supports 0x prefix
console.log(addHex('0xff', '0x1')) // '100'

// Mix and match prefix styles
console.log(addHex('ff', '0x1')) // '100'

// Works with large numbers
console.log(addHex('ffffffffffffffff', '1')) // '10000000000000000'
```

### As a CLI Tool

```bash
# Basic usage
addhex a b
# Output: 15

# Add multiple values
addhex 10 20 30
# Output: 60

# Works with 0x prefix
addhex 0xff 0x1
# Output: 100

# View help
addhex --help
```

## Demo

An interactive demo is available at [https://sandy-mount.github.io/addhex/](https://sandy-mount.github.io/addhex/)

## API Reference

### `addHex(...hexValues)`

Adds two or more hexadecimal values together.

- **Parameters**: `...hexValues` - One or more hexadecimal strings (with or without 0x prefix)
- **Returns**: A lowercase hexadecimal string (without 0x prefix)
- **Throws**: Error if any input is not a valid hexadecimal value

## Development

```bash
# Clone the repository
git clone https://github.com/sandy-mount/addhex.git
cd addhex

# Install dependencies
npm install

# Run tests
npm test

# Run the CLI during development
npm start a b
```

## License

MIT © [Melvin Carvalho](https://github.com/melvincarvalho)
