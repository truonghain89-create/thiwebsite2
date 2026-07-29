const fs = require('fs');
let html = fs.readFileSync('preview.html', 'utf8');

// The regex correctly finds the price pattern and captures classes and price string
html = html.replace(/<span class="([^"]*)">([\d\.]+)đ<\/span>/g, (match, classes, priceStr) => {
    // Remove dots and convert to int
    const price = parseInt(priceStr.replace(/\./g, ''));
    // Add price-val and data-price-vnd
    // Avoid double adding if script run twice
    if (classes.includes('price-val')) return match;
    
    return `<span class="${classes} price-val" data-price-vnd="${price}">${priceStr}đ</span>`;
});

fs.writeFileSync('preview.html', html);
console.log('Prices updated successfully!');
