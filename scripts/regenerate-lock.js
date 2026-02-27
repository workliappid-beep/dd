import { execSync } from 'child_process';
import { unlinkSync, existsSync } from 'fs';

try {
  // Remove existing lock file if it exists
  if (existsSync('/vercel/share/v0-project/package-lock.json')) {
    unlinkSync('/vercel/share/v0-project/package-lock.json');
    console.log('[v0] Removed existing package-lock.json');
  }

  // Run npm install to regenerate lock file
  console.log('[v0] Running npm install to regenerate lock file...');
  execSync('npm install', {
    cwd: '/vercel/share/v0-project',
    stdio: 'inherit'
  });

  console.log('[v0] Lock file regenerated successfully');
} catch (error) {
  console.error('[v0] Error regenerating lock file:', error.message);
  process.exit(1);
}
