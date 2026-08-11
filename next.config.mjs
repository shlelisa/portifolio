import fs from 'fs';
import path from 'path';

try {
  const srcPath = 'C:/Users/ABa/.gemini/antigravity-ide/brain/edf7b115-e8c4-4fb3-a0b0-a79e2f5bce20/profile_professional_edited_1786446116856.png';
  const destPath = path.join(process.cwd(), 'public/images/profile.jpg');
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  }
} catch (err) {
  console.error('Copy profile error:', err);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
