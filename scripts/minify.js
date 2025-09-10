#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

async function minifyJS() {
    const { minify } = await import('terser');
    const inputFile = 'dist/app.js';
    const outputFile = 'dist/app.min.js';
    
    if (!fs.existsSync(inputFile)) {
        console.error('❌ app.js not found. Run npm run build first.');
        return;
    }
    
    console.log('🔧 Minifying JavaScript...');
    
    const code = fs.readFileSync(inputFile, 'utf8');
    
    const result = await minify(code, {
        compress: {
            drop_console: false, // Keep console logs for now
            drop_debugger: true,
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            warnings: false
        },
        mangle: {
            safari10: true
        },
        output: {
            comments: false,
            ascii_only: true
        },
        sourceMap: {
            filename: 'app.min.js',
            url: 'app.min.js.map'
        }
    });
    
    if (result.error) {
        console.error('❌ Minification failed:', result.error);
        return;
    }
    
    fs.writeFileSync(outputFile, result.code);
    if (result.map) {
        fs.writeFileSync(outputFile + '.map', result.map);
    }
    
    const originalSize = fs.statSync(inputFile).size;
    const minifiedSize = fs.statSync(outputFile).size;
    const savings = Math.round((1 - minifiedSize / originalSize) * 100);
    
    console.log(`✅ JavaScript minified: ${outputFile}`);
    console.log(`   Original: ${Math.round(originalSize / 1024)}KB`);
    console.log(`   Minified: ${Math.round(minifiedSize / 1024)}KB`);
    console.log(`   Savings: ${savings}%`);
}

async function minifyCSS() {
    try {
        const postcss = require('postcss');
        const cssnano = require('cssnano');
        
        const inputFile = 'dist/styles.css';
        const outputFile = 'dist/styles.min.css';
        
        if (!fs.existsSync(inputFile)) {
            console.error('❌ styles.css not found. Run npm run build first.');
            return;
        }
        
        console.log('🎨 Minifying CSS...');
        
        const css = fs.readFileSync(inputFile, 'utf8');
        
        const result = await postcss([
            cssnano({
                preset: ['default', {
                    discardComments: {
                        removeAll: true,
                    },
                    minifySelectors: false, // Keep selectors readable
                }]
            })
        ]).process(css, { from: inputFile, to: outputFile });
        
        fs.writeFileSync(outputFile, result.css);
        
        const originalSize = fs.statSync(inputFile).size;
        const minifiedSize = fs.statSync(outputFile).size;
        const savings = Math.round((1 - minifiedSize / originalSize) * 100);
        
        console.log(`✅ CSS minified: ${outputFile}`);
        console.log(`   Original: ${Math.round(originalSize / 1024)}KB`);
        console.log(`   Minified: ${Math.round(minifiedSize / 1024)}KB`);
        console.log(`   Savings: ${savings}%`);
        
    } catch (error) {
        console.error('❌ CSS minification failed:', error.message);
        console.log('💡 Install postcss and cssnano: npm install postcss cssnano');
    }
}

async function main() {
    console.log('🚀 Starting minification process...');
    
    await minifyCSS();
    await minifyJS();
    
    console.log('✅ Minification complete!');
}

main().catch(console.error);