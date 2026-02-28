import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

console.log('[v0] Syncing pnpm dependencies...');
console.log('[v0] Project root:', projectRoot);

try {
  // Set working directory to project root
  const options = { cwd: projectRoot, stdio: 'inherit' };
  
  console.log('[v0] Running: pnpm install --no-frozen-lockfile');
  execSync('pnpm install --no-frozen-lockfile', options);
  
  console.log('[v0] ✅ pnpm lock file synchronized successfully!');
} catch (error) {
  console.error('[v0] ❌ Error syncing pnpm:', error.message);
  process.exit(1);
}
