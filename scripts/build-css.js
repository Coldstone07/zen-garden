#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎨 Building CSS...');

const cssFiles = [
    'styles/main.css',
    'styles/components.css', 
    'styles/responsive.css'
];

const outputDir = 'dist';
const outputFile = path.join(outputDir, 'styles.css');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

let combinedCSS = '';

// Add header comment
combinedCSS += `/* 
 * Kairos Path - Combined Styles
 * Generated: ${new Date().toISOString()}
 * DO NOT EDIT - This file is auto-generated
 */\n\n`;

cssFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`  ✓ Processing ${file}`);
        const content = fs.readFileSync(file, 'utf8');
        combinedCSS += `/* === ${file} === */\n`;
        combinedCSS += content;
        combinedCSS += '\n\n';
    } else {
        console.warn(`  ⚠ File not found: ${file}`);
    }
});

// Write combined file
fs.writeFileSync(outputFile, combinedCSS);

console.log(`✅ CSS built successfully: ${outputFile}`);
console.log(`   Size: ${Math.round(fs.statSync(outputFile).size / 1024)}KB`);