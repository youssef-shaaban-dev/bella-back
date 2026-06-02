const fs = require('fs');

const files = [
  'e:/Projects/bella-back/src/components/technology/FlatHero.tsx',
  'e:/Projects/bella-back/src/components/technology/StandupHero.tsx',
  'e:/Projects/bella-back/src/components/technology/VerticalHero.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove the padding we added previously so the content goes back to the center
    content = content.replace(/ pt-32 md:pt-40/g, '');
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
}
