import { execSync } from 'child_process';
import { unlinkSync, existsSync } from 'fs';

console.log('[v0] Starting clean npm installation...');

try {
  // Delete corrupted lock file if it exists
  if (existsSync('./package-lock.json')) {
    console.log('[v0] Removing corrupted package-lock.json');
    unlinkSync('./package-lock.json');
  }

  // Run npm install to create fresh lock file
  console.log('[v0] Running npm install to regenerate lock file...');
  execSync('npm install', { stdio: 'inherit', cwd: process.cwd() });

  console.log('[v0] ✅ Clean installation completed successfully!');
  console.log('[v0] Dependencies are now synced and ready to use.');
} catch (error) {
  console.error('[v0] ❌ Installation failed:', error.message);
  process.exit(1);
}
