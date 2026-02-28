#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('[v0] Starting npm install...');

try {
  // First, delete any corrupted lock file
  const lockPath = path.join(__dirname, '..', 'package-lock.json');
  if (fs.existsSync(lockPath)) {
    console.log('[v0] Removing corrupted lock file...');
    fs.unlinkSync(lockPath);
  }

  // Run npm install to create fresh lock file
  console.log('[v0] Running npm install (this may take 1-2 minutes)...');
  execSync('npm install', { 
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });

  console.log('[v0] ✅ npm install completed successfully!');
  console.log('[v0] Lock file created with all dependencies synced.');
} catch (error) {
  console.error('[v0] ❌ npm install failed:', error.message);
  process.exit(1);
}
