const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  {
    src: 'C:\\Users\\ABa\\.gemini\\antigravity-ide\\brain\\edf7b115-e8c4-4fb3-a0b0-a79e2f5bce20\\hero_avatar_1786433687344.png',
    dest: path.join(targetDir, 'avatar.png')
  },
  {
    src: 'C:\\Users\\ABa\\.gemini\\antigravity-ide\\brain\\edf7b115-e8c4-4fb3-a0b0-a79e2f5bce20\\occ_system_1786433701006.png',
    dest: path.join(targetDir, 'occ_system.png')
  },
  {
    src: 'C:\\Users\\ABa\\.gemini\\antigravity-ide\\brain\\edf7b115-e8c4-4fb3-a0b0-a79e2f5bce20\\library_system_1786433711593.png',
    dest: path.join(targetDir, 'library_system.png')
  },
  {
    src: 'C:\\Users\\ABa\\.gemini\\antigravity-ide\\brain\\edf7b115-e8c4-4fb3-a0b0-a79e2f5bce20\\house_rental_1786433723305.png',
    dest: path.join(targetDir, 'house_rental.png')
  },
  {
    src: 'C:\\Users\\ABa\\.gemini\\antigravity-ide\\brain\\edf7b115-e8c4-4fb3-a0b0-a79e2f5bce20\\employee_hiring_1786433733693.png',
    dest: path.join(targetDir, 'employee_hiring.png')
  },
  {
    src: 'C:\\Users\\ABa\\.gemini\\antigravity-ide\\brain\\edf7b115-e8c4-4fb3-a0b0-a79e2f5bce20\\gate_management_1786433748001.png',
    dest: path.join(targetDir, 'gate_management.png')
  }
];

images.forEach(img => {
  if (fs.existsSync(img.src)) {
    fs.copyFileSync(img.src, img.dest);
    console.log(`Copied ${img.src} -> ${img.dest}`);
  } else {
    console.error(`Source missing: ${img.src}`);
  }
});
