const fs = require('fs');
let c = fs.readFileSync('preview.html', 'utf8');
c = c.replace(/<div class="flex items-end justify-between pt-5 mt-auto border-t border-border-light">/g, '<div class="flex items-end justify-between pt-5 mt-auto border-t border-border-light gap-2">');
c = c.replace(/<div class="flex flex-col">/g, '<div class="flex flex-col min-w-0">');
c = c.replace(/class="px-6 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-all duration-300 shadow-sm"/g, 'class="shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-all duration-300 shadow-sm"');
c = c.replace(/class="px-6 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-all duration-300"/g, 'class="shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-all duration-300"');
fs.writeFileSync('preview.html', c);
console.log('Fixed preview.html');
