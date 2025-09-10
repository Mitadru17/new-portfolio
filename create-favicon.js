const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 32x32 canvas
const size = 32;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Set background to transparent
ctx.clearRect(0, 0, size, size);

// Draw rounded rectangle background
const margin = 2;
const radius = 6;
const x = margin;
const y = margin;
const width = size - 2 * margin;
const height = size - 2 * margin;

ctx.fillStyle = '#3b82f6'; // Blue color
ctx.beginPath();
ctx.roundRect(x, y, width, height, radius);
ctx.fill();

// Set text properties
ctx.fillStyle = '#ffffff'; // White text
ctx.font = 'bold 18px system-ui, -apple-system, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Draw the MR text
ctx.fillText('MR', size / 2, size / 2);

// Save as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('favicon.png', buffer);

console.log('Created favicon.png');
