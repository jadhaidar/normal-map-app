const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');

const srcPath = path.join(__dirname, 'src', 'index.html');
const destPath = path.join(__dirname, 'public', 'index.html');

console.log('🔨 Building production version...');

async function build() {
  try {
    // Ensure public directory exists
    if (!fs.existsSync(path.join(__dirname, 'public'))) {
      fs.mkdirSync(path.join(__dirname, 'public'), { recursive: true });
    }

    // Read and process HTML
    console.log('📝 Minifying HTML with inline CSS...');
    let html = fs.readFileSync(srcPath, 'utf8');

    // Minify HTML (CSS is now inline in the <style> tag)
    const minified = await minify(html, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyCSS: true,
      minifyJS: true,
      useShortDoctype: true,
      removeAttributeQuotes: false,
      sortAttributes: true,
      sortClassName: true,
    });

    // Write minified HTML
    fs.writeFileSync(destPath, minified, 'utf8');

    // Calculate savings
    const originalSize = Buffer.byteLength(html, 'utf8');
    const minifiedSize = Buffer.byteLength(minified, 'utf8');
    const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

    console.log('✅ Build complete!');
    console.log(`   HTML Original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`   HTML Minified: ${(minifiedSize / 1024).toFixed(1)}KB (${savings}% savings)`);
    console.log(`   Total Size: ${(minifiedSize / 1024).toFixed(1)}KB`);
    
    // Copy other static assets
    const staticFiles = ['favicon.svg', 'site.webmanifest', 'robots.txt'];
    staticFiles.forEach(file => {
      const srcFile = path.join(__dirname, 'public', file);
      if (fs.existsSync(srcFile)) {
        // Already in public, no need to copy
      }
    });
    
  } catch (err) {
    console.error('❌ Build failed:', err);
    process.exit(1);
  }
}

build();
