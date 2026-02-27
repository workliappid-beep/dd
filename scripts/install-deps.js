import { execSync } from 'child_process';
import process from 'process';

try {
  console.log('Running npm install to sync dependencies...');
  execSync('npm install', { 
    cwd: '/vercel/share/v0-project',
    stdio: 'inherit'
  });
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Failed to install dependencies:', error.message);
  process.exit(1);
}
