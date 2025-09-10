#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Building JavaScript...');

const jsFiles = [
    'js/three-animation.js',
    'js/interactions.js', 
    'js/dynamic-content.js',
    'js/main.js'
];

const outputDir = 'dist';
const outputFile = path.join(outputDir, 'app.js');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

let combinedJS = '';

// Add header comment
combinedJS += `/* 
 * Kairos Path - Combined JavaScript
 * Generated: ${new Date().toISOString()}
 * DO NOT EDIT - This file is auto-generated
 */\n\n`;

// Add strict mode
combinedJS += `'use strict';\n\n`;

jsFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`  ✓ Processing ${file}`);
        const content = fs.readFileSync(file, 'utf8');
        
        // Wrap each module in an IIFE to prevent global pollution
        combinedJS += `/* === ${file} === */\n`;
        combinedJS += `(function() {\n`;
        combinedJS += content.replace(/^['"]use strict['"];?\s*/gm, ''); // Remove individual strict mode declarations
        combinedJS += `\n})();\n\n`;
    } else {
        console.warn(`  ⚠ File not found: ${file}`);
    }
});

// Write combined file
fs.writeFileSync(outputFile, combinedJS);

console.log(`✅ JavaScript built successfully: ${outputFile}`);
console.log(`   Size: ${Math.round(fs.statSync(outputFile).size / 1024)}KB`);