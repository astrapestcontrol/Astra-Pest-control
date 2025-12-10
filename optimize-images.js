// Image optimization script
const fs = require('fs');
const path = require('path');

const optimizeImages = () => {
  const files = [
    'client/src/pages/Home.js',
    'client/src/components/ServiceBlog.js',
    'client/src/pages/Blog.js'
  ];

  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Optimize Unsplash images
    content = content.replace(
      /https:\/\/images\.unsplash\.com\/([^"]+)\?w=(\d+)&q=(\d+)/g,
      'https://images.unsplash.com/$1?w=800&q=60&fm=webp'
    );
    
    // Add loading="lazy" and dimensions
    content = content.replace(
      /<img\s+src="([^"]+)"\s+alt="([^"]+)"/g,
      '<img src="$1" alt="$2" loading="lazy" width="800" height="400"'
    );
    
    fs.writeFileSync(file, content);
    console.log(`Optimized: ${file}`);
  });
};

optimizeImages();
